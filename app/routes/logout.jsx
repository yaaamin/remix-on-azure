import React from 'react'
import { authenticator } from "../utils/auth.server";

export const loader = async ({request}) => {
    await authenticator.logout(request, {redirectTo: '/login'})
}


function Logout() {
  return <div>Logout</div>
}

export default Logout