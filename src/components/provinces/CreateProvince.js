import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateProvince = () => {

    const [code, setCode] = useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate()

    const stored = async (e) => {
        e.preventDefault();
        await axios.post('api/province', {
            id: code, //En realidad no es id, sino code
            name: name
        })
        navigate('/provinces')
    }

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-gray-900 text-xl mb-1 font-medium title-font'>Create province</h2>
                <form className='lg:w-1/2 md:w-4/5 bg-white flex flex-col w-full mx-auto' onSubmit={stored}>
                    <div className='relative mb-4'>
                        <label htmlFor='code' className='leading-7 text-sm text-gray-600'>Code</label>
                        <input
                            type="number"
                            id="code"
                            value={code}
                            min="1"
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor='name' className='leading-7 text-sm text-gray-600'>Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <input type="submit" value="Create" className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'></input>
                </form>
            </div>
        </section>
    )
}

export default CreateProvince