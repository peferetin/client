import { useState, useEffect } from "react";
import axios from 'axios';
import Spinner from '../components/Spinner/Spinner.jsx';
import { Link } from 'react-router-dom';
import CategoryCard from "../components/Categories/CategoryCard.jsx";

const Categories = () => {
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchCategory, setSearchCategory] = useState('');
    const [category, setCategory] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/categories');
            setCategories(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            if (searchCategory.length > 0) {
                const response = await axios.get(`http://localhost:8000/api/category?name=${searchCategory}`);
                setCategory(response.data);
            } else {
                setCategory(null);
            }
        } catch (err) {
            setError(err);
        }
    };

    return (
        <>
            <div className="py-8 px-4 bg-gray-800">
                <h1 className="text-center font-bold text-3xl text-white mb-6">Categories</h1>
                <form className="text-center mb-6" onSubmit={handleSearch}>
                    <input type="text" placeholder="Search category..." className="p-2 border border-gray-300 rounded-l-md text-black" onChange={e => setSearchCategory(e.target.value)} />
                    <button onClick={handleSearch} type='submit' className="p-2 bg-blue-600 text-white rounded-r-md">Search</button>
                </form>

                {loading ? <Spinner /> : category ? (
                    <div className="flex flex-wrap justify-around">
                        <Link key={category._id} to={`/category/${category._id}`}>
                            <CategoryCard {...category} />
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-around">
                        {categories.map(category => (
                            <Link key={category._id} to={`/category/${category._id}`}>
                                <CategoryCard {...category} />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Categories;