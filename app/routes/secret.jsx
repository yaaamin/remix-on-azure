import React from 'react'
import { authenticator } from '../utils/auth.server'
import { redirect } from 'remix'

export async function loader ({request}){

    let user = await authenticator.isAuthenticated(request)
    if (!user) {
      return redirect('/login')
    }

    return {
        hello: user
    }
}

function secret() {
  return (
    <div className="mx-auto h-[83vh] max-w-5xl">
      <div className="flex h-full flex-col content-center justify-center text-center">
        <h1 className="text-7xl">🤫</h1>
        <h1 className="text-6xl font-semibold ">Shhhhh. This is a protected route.</h1>
        <p className="text-gray-500">Dont tell anybody about this! </p>
      </div>
    </div>
  )
}

export default secret