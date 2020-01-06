import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { hasStorage } from 'common/utils/featureTests'
import gql from 'graphql-tag'
import Plan from './Plan'
import { ChangePlanContainer, ChangePlanPaper, LargeFlatButton, modalContentStyles, ModalContainer } from './styles'

const CREATE_SUBSCRIPTION = gql`
  query createSubscription($customerID: String!, $plan: String!, $billingPeriod: String, $taxPercent: Float) {
    createSubscription(customerID: $customerID, plan: $plan, billingPeriod: $billingPeriod, taxPercent: $taxPercent) {
      subscription
    }
  }
`

const CANCEL_SUBSCRIPTION = gql`
  query cancelSubscription($subID: String!) {
    cancelSubscription(subID: $subID) {
      stripeSubscription
    }
  }
`

const plans = [
  {
    id: 'entry',
    name: 'Entry',
    price: 49.99,
    cycle: 'monthly',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 99.99,
    cycle: 'monthly',
  },
  {
    id: 'business',
    name: 'Business',
    price: 20000,
    cycle: 'annually',
  },
  {
    id: 'fund',
    name: 'Fund',
    price: 140000,
    cycle: 'annually',
  },
]

class ChangePlan extends Component {
  state = {
    selectedPlan: { id: this.props.currentPlan, price: 50 },
    showConfirmation: false,
  }

  selectPlan = plan => {
    if (hasStorage) localStorage.setItem('selectedPlan', plan.id)
    this.setState({ selectedPlan: plan })
  }

  toggleModal = () => this.setState({ showConfirmation: !this.state.showConfirmation })

  changePlan = async () => {
    const {
      userID,
      stripeCustomer,
      updateUser,
      taxPercent,
      billingPeriod,
      currentPlan,
      oldSubscription,
      refetchUser,
      apolloClient,
    } = this.props
    const { selectedPlan } = this.state

    if (selectedPlan.id === currentPlan) return

    // close modal
    this.toggleModal()

    // Create new subscription
    const { data } = await apolloClient.query({
      query: CREATE_SUBSCRIPTION,
      variables: { customerID: stripeCustomer, billingPeriod, taxPercent, plan: selectedPlan.id },
    })
    const { subscription } = data.createSubscription
    // check that subscription was actually successfull.
    if (!subscription || !subscription.id) return
    // update user with new subscription
    updateUser({
      variables: {
        id: userID,
        stripeSubscription: subscription,
        taxPercent,
        plan: selectedPlan.id,
        type: 'subscriber',
      },
    })
    // cancel old subscription
    await apolloClient.query({
      query: CANCEL_SUBSCRIPTION,
      variables: { subID: oldSubscription.id, cancel_at_period_end: false },
    })
    // refetch user details for MyAccount page to update.
    refetchUser()
  }

  render() {
    const { currentPlan, taxPercent } = this.props
    const { selectedPlan, showConfirmation } = this.state

    const taxAmount = selectedPlan.price * (taxPercent / 100)

    return (
      <ChangePlanContainer>
        <h4 className="title">Change your subscription</h4>
        <ChangePlanPaper>
          {plans.map(plan => (
            <Plan
              name={plan.name}
              key={plan.name}
              price={plan.price}
              cycle={plan.cycle}
              currentPlan={currentPlan}
              selectedPlan={selectedPlan.id}
              onClick={this.selectPlan.bind(null, plan)}
            />
          ))}
          <LargeFlatButton
            disabled={selectedPlan.id === currentPlan}
            onClick={this.toggleModal}
            color="secondary"
            fontWeight="100"
          >
            Next
          </LargeFlatButton>
        </ChangePlanPaper>
        <ReactModal
          isOpen={showConfirmation}
          onRequestClose={this.toggleModal}
          style={modalContentStyles}
          overlayClassName="modal-overlay"
        >
          <ModalContainer>
            <h3 className="title">Confirm plan change</h3>
            <div className="beside">
              <p className="description">Price:</p>
              <p className={`price ${!taxPercent && 'semi-bold'}`}>
                ${selectedPlan.price} {!taxPercent && selectedPlan.cycle}
              </p>
            </div>
            {!!taxAmount && (
              <React.Fragment>
                <div className="beside">
                  <p className="description">{taxPercent}% VAT Tax:</p>
                  <p className="price">${taxAmount.toFixed(2)}</p>
                </div>
                <div className="beside">
                  <p className="price semi-bold">Total:</p>
                  <p className="price semi-bold">
                    ${(selectedPlan.price + taxAmount).toFixed(2)} {selectedPlan.cycle}
                  </p>
                </div>
              </React.Fragment>
            )}
            <LargeFlatButton color="primary" align="center" onClick={this.changePlan}>
              Subscribe for ${(selectedPlan.price + taxAmount).toFixed(2)} {selectedPlan.cycle}
            </LargeFlatButton>
          </ModalContainer>
        </ReactModal>
      </ChangePlanContainer>
    )
  }
}

export default ChangePlan
