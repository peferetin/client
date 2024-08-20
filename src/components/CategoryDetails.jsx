import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from "react"
import Spinner from '../components/Spinner/Spinner.jsx'
import ProductCard from "./ProductCard.jsx"

const CategoryDetails = () => {
    const { id } = useParams()
    const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchCategory = async () => {
        try {
            const category = await axios.get(`https://server-sandy-three.vercel.app/api/categories/${id}`)
            setCategory(category.data)
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [id])

    if (loading) return <Spinner />
    if (error) return <h1>Error</h1>

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <h1>Details</h1>
            <div className="col-span-1 md:col-span-2">
                <h1>{category.name}</h1>
                <p>{category.description}</p>

            </div>

        </div>


    )
}

export default CategoryDetails