import React from 'react'
import { NavLink, useLoaderData, Form } from 'remix'
import { authenticator } from '../utils/auth.server'

export async function loader({ request }) {
  let user = await authenticator.isAuthenticated(request)

  console.log(user)

  return {
    user: user,
  }
}

export async function action({ request }) {
  await authenticator.logout(request, { redirectTo: '/login' })
}

function Navigation({ user }) {
  return (
    <div className="mx-auto  max-w-5xl border-b py-5">
      <div className="">
        <ul className="flex flex-row gap-10 font-medium">
          <li>
            <NavLink to="/home" className="hover:text-green-700">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-2" className="hover:text-green-700">
              Page 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="hover:text-green-700">
              Hidden Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/about" className="hover:text-green-700">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/notfound" className="hover:text-green-700">
              404 Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/secret" className="hover:text-green-700">
              Secret Page
            </NavLink>
          </li>
          {user ? (
            <li>
              <NavLink to="/logout" className="hover:text-green-700">
                Logout
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/login" className="hover:text-green-700">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navigation
