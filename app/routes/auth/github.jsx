import { authenticator } from '../../utils/auth.server'

export let action = async ({ request }) => {
  return await authenticator.authenticate('github', request, {
    successRedirect: '/secret',
    failureRedirect: '/login',
    options: {},
  })
}
