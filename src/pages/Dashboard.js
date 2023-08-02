import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const logout = async () => {
    await axios.post('api/logout')
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    navigate('/login')
  }

  return (
    <section>
      <h2 className='text-gray-900 text-xl mb-1 font-medium title-font'>Dashboard</h2>
      <div className='mb-5'>
        <p>Hi, {localStorage.getItem('name')}</p>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Link to="/provinces" className='flex w-1/2 text-white bg-blue-500 border-0 py-2 px-6 mx-auto focus:outline-none hover:bg-blue-600 rounded'>
            Provincias
          </Link>
        </div>
        <div>
          <button type='button' className='flex w-1/2 text-white bg-red-500 border-0 py-2 px-6 mx-auto focus:outline-none hover:bg-red-600 rounded' onClick={() => logout()}>Logout</button>
        </div>
      </div>


    </section>
  )
}

export default Dashboard