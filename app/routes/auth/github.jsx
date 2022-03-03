import { authenticator } from '../../utils/auth.server'

export let loader = () => redirect('/login')

export let action = async ({ request }) => {
  return await authenticator.authenticate('github', request)
}

import React from 'react'

function Github() {
  return (
    <div>Github Auth</div>
  )
}

export default Github