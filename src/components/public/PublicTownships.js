import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8001/api/'

const ShowTownships = () => {

    const {id} = useParams()

    const [nameDistrict, setNameDistrict] = useState('')
    const [townships, setTownships] = useState([]);
    
    useEffect(() => {
        getAllTownships()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAllTownships = async () => {
        const response = await axios.get(`api/district/${id}/townships`)
        setTownships(response.data)
    }

    const deleteTownship = async (id) => {
        await axios.delete(`api/township/${id}`)
        getAllTownships()
    }

    useEffect( () =>{
        const getDistrictById = async () => {
            const response = await axios.get(`api/district/${id}`)
            setNameDistrict(response.data.name)
        }
        getDistrictById();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col text-center w-full mb-20'>
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>Corregimientos de {nameDistrict}</h1>
                </div>
                <div className='lg:w-3/4 w-full mx-auto overflow-auto'>
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Code</th>
                                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {townships.map((township) => (
                                <tr key={township.id}>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{township.id}</td>
                                    <td className='px-4 py-3 border-b-2 border-gray-200'>{township.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ShowTownships