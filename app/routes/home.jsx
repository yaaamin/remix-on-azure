import { Link, useLoaderData } from 'remix'

export let meta = ({data}) => {

  return {
    title: 'HDC + Remix Starter',
    description: 'Welcome to HDC!',
    'og:image': data.HDCLogo
  }
}

export let links = () => {
  return []
}

export let loader = async () => {
  return {
    message: 'Welcome to HDC 🍃',
    HDCLogo: 'https://hdc.com.mv/app/wp-content/themes/hdc_web_v2/assets/img/HDC_Logo.png',
  }
}

export default function Index() {
  let data = useLoaderData()

  return (
    <div className='grid grid-cols-1 content-center h-[75vh]'>
      <div className="mx-auto max-w-5xl  p-10 text-center">
        <img
          src="https://hdc.com.mv/app/wp-content/themes/hdc_web_v2/assets/img/HDC_Logo.png"
          className=" mx-auto py-5"
        />
        <h1 className="text-center text-7xl font-semibold text-green-700">Welcome to HDC!</h1>
        <p>This is the homepage and this will be rendered on the index page.</p>
      </div>
    </div>
  )
}
