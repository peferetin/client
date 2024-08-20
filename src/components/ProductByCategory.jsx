import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const ProductByCategoryId = () => {
    let navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { categoryID } = useParams()

    const fetchProducts = async () => {

        try {
            const products = await axios.get(`https://server-sandy-three.vercel.app/api/products/categories/${categoryID}`)
            setProducts(products.data)
            console.log(products.data)
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [categoryID])

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

            {products && products.map(product => {
                return (
                    // <div key={product._id} className="bg-white p-4 shadow-md">
                    //     <h1>{product.name}</h1>
                    //     <p>{product.description}</p>
                    //     <p>{product.price}</p>
                    // </div>

                    <Card key={product._id} className="w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out m-4">

                        <CardHeader shadow={false} floated={false} className="h-72 cursor-pointer relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            {/* Add to Wish logo/icon */}
                            <div className="absolute top-2 right-2 text-white text-lg">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90a00d6146e26ae98a2dd8e92d5cbe9cdd272d33a878f88e8f43efe16cd1d92?apiKey=cb130a580d494b2d8274b3edb32534b2&"
                                    className="w-5 aspect-square"
                                />
                                {/* Example using a Font Awesome heart icon */}
                                <i className="fa fa-heart cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out" onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click event
                                    // Add to wish logic here
                                }}></i>
                            </div>
                        </CardHeader>
                        <CardBody onClick={() => navigate(`/products/categories/${categoryID}`)} className="cursor-pointer p-4">
                            <Typography color="blue" className="font-semibold text-xl mb-2">
                                {product.name}
                            </Typography>
                            <Typography color="green" className="font-semibold text-lg">
                                ${product.price}
                            </Typography>
                            {/* Uncommented and updated Typography for description */}
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75 mt-2"
                            >
                                {product.description ? product.description : "No description available."}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button onClick={() => navigate(`/products/${product._id}`)}
                                ripple={false}
                                fullWidth={true}
                                className="bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-none hover:scale-105 focus:scale-105 active:scale-100 transition-transform duration-200 ease-in-out"
                            >
                                View Details
                            </Button>
                        </CardFooter>
                    </Card>

                )

            })}
        </div>
    )
}
export default ProductByCategoryId