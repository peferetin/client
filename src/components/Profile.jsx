import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    const { userData } = useAuth()
    let navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
        email: '',
        address: {
            name: '',
            lastName: '',
            street: {
                addressLine1: '',
                number: ''
            },
            city: '',
            postalCode: '',
        }
    })

    const getUserById = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/users/${userData._id}`)
            console.log(response.data)
            setUser(prevUser => ({
                ...prevUser,
                ...response.data,
                address: {
                    ...prevUser.address,
                    ...response.data.address,
                    street: {
                        ...prevUser.address.street,
                        ...response.data.address?.street
                    }
                }
            }));
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        console.log(e)
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:8000/api/users/${userData._id}`, { user })
            console.log(response)
            if (response.data) {
                alert('User info has been updated')
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!userData) {
            navigate('/')
        } else {
            getUserById()
        }
    }, [])

    console.log(user)

    return (
        <>
            {userData && !loading && (

                <form onSubmit={handleSubmit} className='max-w-lg ml-6'>
                    <div className="space-y-12 ">


                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile Menu : {userData && userData.email}</h2>
                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={user.email}
                                        onChange={e => setUser({ ...user, email: e.target.value })}
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address ? user.address.name : ''}
                                            onChange={(e) => {
                                                setUser({
                                                    ...user, address: {
                                                        ...user.address,
                                                        name: e.target.value
                                                    }
                                                })
                                            }}
                                            type="text"
                                            name="address.name"
                                            id="name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address ? user.address.lastName : ''}
                                            onChange={(e) => {
                                                setUser({
                                                    ...user, address: {
                                                        ...user.address,
                                                        lastName: e.target.value
                                                    }
                                                })
                                            }}
                                            type="text"
                                            name="lastName"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>




                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address.street ? user.address.street.addressLine1 : ''}
                                            onChange={(e) => {
                                                setUser({
                                                    ...user,
                                                    address: {
                                                        ...user.address,
                                                        street: {
                                                            ...user.address.street,
                                                            addressLine1: e.target.value
                                                        }
                                                    }
                                                });
                                            }}
                                            type="text"
                                            name="street"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street address Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address.street ? user.address.street.number : ''}
                                            onChange={(e) => {
                                                setUser({
                                                    ...user,
                                                    address: {
                                                        ...user.address,
                                                        street: {
                                                            ...user.address.street,
                                                            number: e.target.value
                                                        }
                                                    }
                                                })
                                            }}
                                            type="text"
                                            name="street-1"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address ? user.address.city : ''}
                                            onChange={(e) => {
                                                setUser({
                                                    ...user, address: {
                                                        ...user.address,
                                                        city: e.target.value
                                                    }
                                                })
                                            }}
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>



                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address ? user.address.postalCode : ''}
                                            onChange={(e) => {
                                                setUser({
                                                    ...user, address: {
                                                        ...user.address,
                                                        postalCode: e.target.value
                                                    }
                                                })
                                            }}
                                            type="text"
                                            name="postalCode"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update User Information
                        </button>
                    </div>
                </form>
            )

            }
        </>
    )

}
export default Profile;