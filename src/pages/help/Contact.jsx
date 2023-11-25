import { Form, redirect, useActionData } from 'react-router-dom'

export default function Contact() {

  const data = useActionData();

  return (
    <div className="w-full px-20 py-10">
        <Form method='post' action="/help/contact" className='w-[50%] p-5 bg-gray-800 rounded-md mx-auto'>
        <h1 className="text-white text-3xl font-bold text-start mb-3">Contact Us</h1>
          <div className='mb-3'>
              <label className='text-lg text-white font-semibold' htmlFor="email">Email</label>
              <input name='email' className='w-full px-2 rounded-md h-10' id='email' type="email"/>
          </div>
          <div className='mb-3'>
              <label className='text-lg text-white font-semibold' htmlFor="message">Message</label>
              <textarea name='message' className='w-full px-2 rounded-md h-20' id='message'/>
        </div>      
          {data && data.error && <p className='text-red-500 text-start font-semibold mb-3'>{data.error}</p>}
          <button type='submit' className='bg-white px-3 py-1 rounded text-gray-600'>Submit</button>
        </Form>
    </div>
  )
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  if (submission.message.length < 15) {
    return {error: 'Message should be more than 15 characters'}
  }

  return redirect('/');
}
