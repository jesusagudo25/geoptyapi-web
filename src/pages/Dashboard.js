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
          <h2>Dashboard</h2>
          <Link to="/provinces" className='flex w-1/2 text-white bg-blue-500 border-0 py-2 px-6 mx-auto focus:outline-none hover:bg-blue-600 rounded'>
            Provincias
          </Link>
          <button type='button' className='flex w-1/2 text-white bg-red-500 border-0 py-2 px-6 mx-auto focus:outline-none hover:bg-red-600 rounded' onClick={() => logout()}>Logout</button>
          {/* 
          
          Creo que es bueno empezar por algo. De manera que la vayas trabajando poco a poco. Lo de los roles si es fundamental, pero lo demás poco a poco.

          Inicialmente:
          1. Autenticación (Inicio, registro, recuperar password)
          2. Dashboard
            2.1. (Editores) Administrar categorización -> Datos fundamentales
            2.2. (Admin) Administrar categorización -> Datos fundamentes -> Administrar usuarios
          3. Validación de formularios
          4. 
          */}
      </section>
  )
}

export default Dashboard