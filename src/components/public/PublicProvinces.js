import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowProvinces = () => {

    const [provinces, setProvinces] = useState([]);
    useEffect(() => {
        getAllProvinces()
    }, [])

    const getAllProvinces = async () => {
        const response = await axios.get('api/provinces')
        setProvinces(response.data)
        console.log(response);
    }

    const deleteProvince = async (id) => {
        await axios.delete(`api/province/${id}`)
        getAllProvinces()
    }

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col text-center w-full mb-20'>
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>Provincias de Panamá</h1>
                </div>
                <div className='lg:w-3/4 w-full mx-auto overflow-auto'>
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Code</th>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Name</th>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {provinces.map((province) => (
                                <tr key={province.id}>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{province.id}</td>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{province.name}</td>
                                    <td className='border-b-2 border-gray-200 text-center'>
                                        <div className='flex items-center space-x-4 text-sm'>
                                            <Link to={`/province/${province.id}/districts/public`} className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-500 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth='2'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ShowProvinces