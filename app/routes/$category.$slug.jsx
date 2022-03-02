import React from 'react'
import { useLoaderData, redirect, useParams, Link } from 'remix'

export const loader = ({ params }) => {
  const paths = [
    {
      category: 'home',
      slug: 'about',
    },
    {
      category: 'home',
      slug: 'user',
    },
  ]

  if (
    !(
      paths.some((e) => e.category === params.category) && paths.some((e) => e.slug === params.slug)
    )
  ) {
    throw new Response('Not found.', {
      status: 404,
    })
  }

  return {
    params: params,
  }
}

export function CatchBoundary() {
  const params = useParams()

  return (
    <div className="flex h-[83vh] flex-col items-center ">
      <div className="mx-auto my-auto w-full max-w-5xl py-10">
        <h1 className="text-5xl font-bold">Hey there!</h1>
        <p className="pb-10 text-gray-500">This page doesnt seem to exist (at all!)</p>
        <Link to="/home" className="text-blue-600 underline">
          Lets go home?
        </Link>
      </div>
    </div>
  )
}

function Home() {
  const data = useLoaderData()

  return (
    <div className="mx-auto max-w-5xl py-10 h-[82vh] flex flex-col justify-center text-center">
      Hello from {data.params.slug} in the {data.params.category} category
    </div>
  )
}

export default Home
