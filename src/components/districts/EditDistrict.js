import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditDistrict = () => {

    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [province_id, setProvinceID] = useState('')
    // const [backupProvinceID, setBackupProvinceID] = useState('')

    // const [provinces, setProvinces] = useState([]);

    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`api/district/${id}`,{
            id: code, //En realidad no es id, sino code
            name: name,
            province_id: province_id
        })

        navigate(`/province/${province_id}/districts`)
    }

    useEffect( () =>{
        const getDistrictById = async () => {
            const response = await axios.get(`api/district/${id}`)
            console.log(response);
            setCode(response.data.id)
            setName(response.data.name)
            setProvinceID(response.data.province_id)
            // setBackupProvinceID(response.data.province_id)
        }
        getDistrictById();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

/*     //Provincias para seleccionar
    useEffect(() => {
        const getAllProvinces = async () => {
            const response = await axios.get(`${endpoint}provinces`)
            setProvinces(response.data)
            console.log(response);
        }
        getAllProvinces();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) */

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-gray-900 text-xl mb-1 font-medium title-font'>Edit district</h2>
                <form className='lg:w-1/2 md:w-4/5 bg-white flex flex-col w-full mx-auto' onSubmit={update}>
                    <p className='leading-relaxed mb-5 text-gray-600'>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
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
{/*                     <div className='relative mb-4'>
                        <label htmlFor='province_id' className='leading-7 text-sm text-gray-600'>Province</label>
                        <select
                            id="province_id"
                            value={province_id}
                            onChange={(e) => setProvinceID(e.target.value)}
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                {provinces.map((province) => (
                                    <option value={province.id} key={province.id}>{province.name}</option>
                                ))}
                        </select>
                    </div> */}
                    <input type="submit" value="Edit" className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'></input>
                    <p className='text-xs text-gray-500 mt-3'>Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </form>
            </div>
        </section>
    )
}

export default EditDistrict