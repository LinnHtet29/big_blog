import { Link, useRouteError } from "react-router-dom"

export default function BlogError() {

    const error = useRouteError();

  return (
    <div className="px-20 my-5">
        <h1 className="text-2xl text-white text-start font-bold">Sorry :'( </h1>
        <p className="text-white font-light">{error.message}</p>
        <div className='flex justify-center mt-5'>
            <Link to="/" className='bg-gray-200 rounded-md text-gray-600 text-lg font-light p-2'>Go to Home Page</Link>
        </div>
    </div>
  )
}
