const hasPermissions = (viewingPlan, user) => {
  console.log(user)
  if (!user.type) return 'WAITING'
  if (user.type === 'admin' || user.type === 'demo') return true
  if (user.type === 'unpaid') return false
  if (user.type === 'canceled') return false

  if (user.plan === 'ENTRY') {
    if (viewingPlan === 'ENTRY') return true
  } else if (user.plan === 'PREMIUM') {
    if (viewingPlan === 'ENTRY') return true
    if (viewingPlan === 'PREMIUM') return true
  } else if (user.plan === 'BUSINESS') {
    if (viewingPlan === 'BUSINESS') return true
  } else if (user.plan === 'FUND') {
    if (viewingPlan === 'FUND') return true
  }
  return false
}

export default hasPermissions
