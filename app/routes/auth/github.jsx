import { authenticator } from '../../utils/auth.server'
import { redirect } from 'remix'
import React from 'react'

export let loader = async ({ request }) => {
  const user = await authenticator.authenticate('github', request)

  if (user) {
    return redirect('/secret')
  } else if (!user) {
    return redirect('/login')
  }

  // return redirect('/login')
  // return await authenticator.authenticate('github', request)
}

export let action = async ({ request }) => {
  return await authenticator.authenticate('github', request)
}

function Github() {
  return <div>Github Auth</div>
}

export default Github

// https://polite-field-043a3c810.1.azurestaticapps.net/
// https://polite-field-043a3c810.1.azurestaticapps.net/auth/github/callback
