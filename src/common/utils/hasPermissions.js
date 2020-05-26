const hasPermissions = (viewingPlan, user) => {
  if (!user.type) return 'WAITING'
  if (user.type === 'admin' || user.type === 'demo') return true
  if (user.type === 'unpaid') return false
  if (user.type === 'canceled') return false

  if (user.plan === 'entry') {
    if (viewingPlan === 'entry') return true
  } else if (user.plan === 'premium') {
    if (viewingPlan === 'entry') return true
    if (viewingPlan === 'premium') return true
  } else if (user.plan === 'business') {
    if (viewingPlan === 'business') return true
  } else if (user.plan === 'fund') {
    if (viewingPlan === 'fund') return true
  }

  return false
}

export default hasPermissions
