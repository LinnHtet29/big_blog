import { Link } from 'react-router-dom'
import Home from './Home'

export default function NotFound() {
  return (
      <div className='bg-[#504f4f] w-screen h-screen fixed top-0 right-0 flex justify-center items-center'>
          <div className='w-50% p-5'>    
            <h1 className='text-3xl text-gray-400 font-extrabold text-center mb-3'>Page Not Found</h1>
              <p className='text-gray-300 font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nulla corrupti ipsam?
                  Quos minus, labore commodi a consectetur rem hic.
              </p>
              <div className='flex justify-center mt-5'>
                  <Link to="/" element={<Home/>} className='bg-gray-200 rounded-md text-gray-600 text-lg font-light p-2'>Go to Home Page</Link>
              </div>
          </div>
    </div>
  )
}
