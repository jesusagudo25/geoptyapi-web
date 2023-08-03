import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const ShowDistricts = () => {

    const {id} = useParams()

    const [nameProvince, setNameProvince] = useState('')
    const [districts, setDistricts] = useState([]);
    
    useEffect(() => {
        getAllDistricts()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAllDistricts = async () => {
        const response = await axios.get(`api/province/${id}/districts`)
        setDistricts(response.data)
    }

    const deleteDistrict = async (id) => {
        await axios.delete(`api/district/${id}`)
        getAllDistricts()
    }

    useEffect( () =>{
        const getProvinceById = async () => {
            const response = await axios.get(`api/province/${id}`)
            setNameProvince(response.data.name)
        }
        getProvinceById();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col text-center w-full mb-20'>
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>Distritos de {nameProvince}</h1>
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
                            {districts.map((district) => (
                                <tr key={district.id}>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{district.id}</td>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{district.name}</td>
                                    <td className='border-b-2 border-gray-200 text-center'>
                                        <div className='flex items-center space-x-4 text-sm'>
                                            <Link to={`/district/${district.id}/townships/public`} className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-500 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'>
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

export default ShowDistricts