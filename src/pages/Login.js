import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        axios.get('sanctum/csrf-cookie')
        .then(response => {
            axios.post('api/login', {
                email: email,
                password: password
            }).then(response => {
                if (response.data.status === 'success') {
                    console.log(response.data.message)
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('name', response.data.name)
                    navigate('/dashboard')
                }
                else{
                    setMessage(response.data.message)
                }
            }).catch(error => {
                error.response.data.message ? setMessage(error.response.data.message) : setErrors(error.response.data.errors)
            })
        });
    }

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-gray-900 text-xl mb-1 font-medium title-font'>Login</h2>
                <form className='lg:w-1/2 md:w-4/5 bg-white flex flex-col w-full mx-auto' onSubmit={login}>
                    <p className='leading-relaxed mb-5 text-gray-600'>Geopty API Login</p>
                    <div className='relative mb-4'>
                        <label htmlFor='email' className='leading-7 text-sm text-gray-600'>Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            min="1"
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            <span>{errors.email}</span>
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor='password' className='leading-7 text-sm text-gray-600'>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            <span>{errors.password} {message}</span>
                    </div>
                    <input type="submit" value="Login" className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'></input>
                    <p className='text-xs text-gray-500 mt-3'>Don't have an account? <a href='/register' className='text-blue-500'>Register</a></p>
                </form>
            </div>
        </section>
    )
}

export default Login