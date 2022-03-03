import { authenticator } from '../../utils/auth.server'
import { redirect } from 'remix'
import React from 'react'

export let loader = async ({request}) => {
  // return redirect('/login')
  return await authenticator.authenticate('github', request)
}

export let action = async ({ request }) => {
  return await authenticator.authenticate('github', request)
}

function Github() {
  return <div>Github Auth</div>
}

export default Github
