import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { USER_SIGNUP } from 'common/queries'

const CreateUser = () => {
  const [userSignup] = useMutation(USER_SIGNUP)

  const create = async () => {
    const signupData = await userSignup({
      variables: {
        email: 'thomas@visionimages.dk',
        password: 'temp1234!',
        stripeToken: '',
        firstName: 'Thomas',
        lastName: 'Lyck',
        plan: 'entry',
        type: 'subscriber',
        taxPercent: 0,
        billingPeriod: 'monthly',
        intros: {},
        address: {
          country: 'Denmark',
          city: 'Haderslev',
          postalCode: '8100',
          address: 'Ribe Landevej 39',
        },
        device: {
          os: '',
          product: '',
          browser: '',
          type: '',
        },
      },
    })
    console.log('signupData: ', signupData)
  }

  return <button onClick={create}>CREATE USERr</button>
}

export default CreateUser
