import axios from 'axios'
import { useState, createContext, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// We create the context
export const AuthContext = createContext()


// We create the provider
export const AuthProvider = ({ children }) => {
    // let navigate = useNavigate()

    const [userData, setUserData] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
            fetchUser(storedToken)
        }
        else {
            setLoading(false)
        }
    }, [])


    const fetchUser = async (token) => {
        try {
            const response = await axios.post(`https://server-sandy-three.vercel.app/api/users/token`, { token })
            setUserData(response.data)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    // Login function is used to login the user
    // As a response from this api call, we get a token, we pass this token to the fetchUser function that will fetch the user information based on the token we get when we logged in
    const login = async (userData) => {
        try {
            const loggedInUser = await axios.post(`https://server-sandy-three.vercel.app/api/login`, userData)
            localStorage.setItem('token', loggedInUser.data.token)
            fetchUser(loggedInUser.data.token)
            return loggedInUser
        }
        catch (err) {
            return err
        }
    }

    // CREATE A LOGOUT FUNCTION THAT WILL REMOVE THE TOKEN FROM THE LOCALSTORAGE

    const logout = async () => {
        try {
            const response = await axios(`https://server-sandy-three.vercel.app/api/logout/${userData._id}`)
            if (response.data) {
                alert(response.data)
            }
        }
        catch (err) {
            return err
        }
        finally {
            localStorage.removeItem('token')
            setUserData(null)
            navigate('/')
        }
    }

    return (
        <>
            <AuthContext.Provider value={{ login, logout, userData }} >
                {!loading && children}
            </AuthContext.Provider>
        </>
    )
}

// We create a custom hook
export const useAuth = () => useContext(AuthContext)
