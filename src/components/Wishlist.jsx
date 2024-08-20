
import React from "react";
import ProductCard from "../components/ProductCard.jsx";
import { useState } from "react";


const WishList = () => {
    const [products, setProducts] = useState(Object.keys(localStorage));
    const handleRemoveItem = (productKey) => {
        localStorage.removeItem(productKey);
        setProducts(Object.keys(localStorage))
    };


    return (
        <>
            <h1>Welcome to the wish list</h1>
            {products.map(product => {
                let productData;
                try {

                    const item = localStorage.getItem(product);
                    productData = JSON.parse(item);
                    console.log(productData);
                } catch (e) {
                    console.error(`Error parsing JSON for product ${product}:`, e);
                    return null; // Skip this product if JSON parsing fails
                }


                return (

                    <div key={product}>
                        <ProductCard {...productData} />
                        <button
                            onClick={() => handleRemoveItem(product)}
                            style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                marginTop: '10px'
                            }}
                        >
                            Remove from Wishlist
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default WishList;


// const WishList = () => {
//     let products = Object.keys(localStorage)
//     return (
//         <>
//             <h1>Welcome to the wish list</h1>
//             {products.map(product => {
//                 const productData = JSON.parse(localStorage.getItem(product));
//                 return (
//                     <ul key={product}>
//                         <li>{productData.name}</li>
//                         <li>
//                             <img src={productData.image} alt={productData.name} />
//                         </li>
//                     </ul>
//                 )
//             })}
//         </>
//     )
// }
// export default WishList