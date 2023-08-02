import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditTownship = () => {

    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [district_id, setDistrictID] = useState('')
    const [active, setActive] = useState(true)

    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`api/township/${id}`,{
            id: code, //En realidad no es id, sino code
            name: name,
            district_id: district_id,
            active: active
        })

        navigate(`/district/${district_id}/townships`)
    }

    useEffect( () =>{
        const getDistrictById = async () => {
            const response = await axios.get(`api/township/${id}`)
            console.log(response);
            setCode(response.data.id)
            setName(response.data.name)
            setDistrictID(response.data.district_id)
            setActive(response.data.active)
        }
        getDistrictById();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-gray-900 text-xl mb-1 font-medium title-font'>Edit district</h2>
                <form className='lg:w-1/2 md:w-4/5 bg-white flex flex-col w-full mx-auto' onSubmit={update}>
                    <div className='relative mb-4'>
                        <label htmlFor='code' className='leading-7 text-sm text-gray-600'>Code</label>
                        <input
                            type="number"
                            id="code"
                            value={code}
                            min="1"
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
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
                    <div className='relative mb-4'>
                        <label htmlFor='country' className='leading-7 text-sm text-gray-600'>Status</label>
                        <select
                            value={active}
                            onChange={(e) => setActive(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <option value={1}>Active</option>
                            <option value={0}>Inactive</option>
                        </select>
                    </div>
                    <input type="submit" value="Edit" className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'></input>
                </form>
            </div>
        </section>
    )
}

export default EditTownship