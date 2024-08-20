import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
    const { addToCart } = useCart();
    const { userData } = useAuth();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("Green");
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://server-sandy-three.vercel.app/api/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]); // Added id as a dependency

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error</h1>;
    console.log(product);
    console.log(selectedColor, selectedSize);


    return (
        <div className="flex justify-center">
            <Card className="w-96 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-lg overflow-hidden ">
                <CardHeader shadow={true} floated={false} className="h-96">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                    />
                </CardHeader>

                <CardBody className="bg-white p-4">
                    <div className="mb-4 flex items-center justify-between">
                        <Typography color="black" className="font-bold text-xl">
                            {product.name}
                        </Typography>
                        <Typography color="green" className="font-bold text-lg">
                            ${product.price}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-sm mb-2"
                    >
                        {product.description}
                    </Typography>
                    <div className="flex justify-between items-center mt-2">
                        <Typography
                            variant="small"
                            color="black"
                            className="font-semibold"
                        >
                            Quantity:
                        </Typography>
                        <select
                            value={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(e.target.value)}
                            className="ml-2 border border-gray-300 rounded-md p-1 text-gray-700"
                        >
                            {[...Array(product.quantity).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    {product.size && product.size.length > 0 && (
                        <div className="mt-4">
                            <Typography
                                variant="small"
                                color="black"
                                className="font-semibold"
                            >
                                Size:
                            </Typography>
                            <select
                                value={selectedSize}
                                onChange={(e) => {
                                    setSelectedSize(e.target.value)
                                    console.log(e.target.value)
                                }}
                                className="ml-2 border border-gray-300 rounded-md p-1 text-gray-700"
                            >
                                {product.size.map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {product.color && product.color.length > 0 && (
                        <div className="mt-4">
                            <Typography
                                variant="small"
                                color="black"
                                className="font-semibold"
                            >
                                Color:
                            </Typography>
                            <select
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="ml-2 border border-gray-300 rounded-md p-1 text-gray-700"
                            >
                                {product.color.map((color) => (
                                    <option key={color} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                </CardBody>
                <CardFooter className="pt-0 bg-white">

                    <Button
                        style={{
                            background: 'linear-gradient(90deg, #34D399 0%, #10B981 100%)',
                            border: '2px solid #10B981',
                            fontFamily: 'serif',
                            fontWeight: 'bold',
                        }}
                        onClick={userData ? () => addToCart(userData._id, product._id, selectedQuantity, product.price, product.name, selectedSize, selectedColor,) : () => alert('You need to be connected to add product to the cart')}
                        ripple={true}
                        fullWidth={true}
                        className="text-white shadow-xl hover:shadow-2xl focus:shadow-2xl active:shadow-lg transition duration-150 ease-in-out transform hover:scale-105 focus:scale-105 active:scale-100"
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductDetails;