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
        console.log(response);
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
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
                </div>
                <div className='lg:w-3/4 w-full mx-auto overflow-auto'>
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Code</th>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Name</th>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Created at</th>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Updated at</th>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {districts.map((district) => (
                                <tr key={district.id}>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{district.id}</td>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{district.name}</td>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{district.created_at}</td>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{district.updated_at}</td>
                                    <td className='border-b-2 border-gray-200 text-center'>
                                        <div className='flex items-center space-x-4 text-sm'>
                                            <Link to={`/district/${district.id}/townships`} className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-500 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth='2'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </Link>

                                            <Link to={`/district/edit/${district.id}`} className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-500 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'>
                                                <svg className='w-5 h-5' aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                                </svg>
                                            </Link>

                                            <button onClick={() => deleteDistrict(district.id)} className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-500 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'>
                                                <svg className='w-5 h-5' aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule='evenodd' d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule='evenodd'></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <button className='text-blue-500 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className='w-4 h-4 ml-2' viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    <Link to={`/district/create/${id}`}  className='flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded'>Create</Link>
                </div>
            </div>
        </section>
    )
}

export default ShowDistricts