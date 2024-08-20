
import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const ProductCard = ({ image, name, price, quantity, description, _id }) => {
    const addToWishList = (product) => {
        localStorage.setItem(product.id, JSON.stringify(product));
        // Optionally, update the wish list state if needed
    };

    let navigate = useNavigate();
    return (
        <Card className="w-72 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out m-4 border border-gray-200">

            <CardHeader shadow={false} floated={false} className="h-72 cursor-pointer relative">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
                {/* Add to Wish logo/icon */}
                <div className="absolute top-2 right-2 text-white text-lg">
                    <img onClick={() => {
                        addToWishList({ _id: _id, name, price, image })
                        console.log("Added to wish list");
                    }}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90a00d6146e26ae98a2dd8e92d5cbe9cdd272d33a878f88e8f43efe16cd1d92?apiKey=cb130a580d494b2d8274b3edb32534b2&"
                        className="w-5 aspect-square"
                    />
                    {/* Example using a Font Awesome heart icon */}
                    <i className="fa fa-heart cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out" onClick={(e) => {
                        e.stopPropagation(); // Prevent card click event
                    }}></i>
                </div>
            </CardHeader>
            <CardBody onClick={() => navigate(`/products/${_id}`)} className="cursor-pointer p-4">
                <Typography color="blue" className="font-serif font-bold text-xl mb-2">
                    {name}
                </Typography>
                <Typography color="green" className="font-serif font-bold text-lg">
                    ${price}
                </Typography>

                {/* <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75 mt-2"
                >
                    {description ? description : "No description available."}
                </Typography> */}
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={() => navigate(`/products/${_id}`)}
                    ripple={false}
                    fullWidth={true}
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-none hover:scale-105 focus:scale-105 active:scale-100 transition-transform duration-200 ease-in-out"
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
};
export default ProductCard;