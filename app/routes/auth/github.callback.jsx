import { authenticator } from '../../utils/auth.server'

export let loader = ({ request }) => {
  return authenticator.authenticate('github', request, {
    successRedirect: '/secret',
    failureRedirect: '/login',
  })
}
