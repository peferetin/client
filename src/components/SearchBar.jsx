
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSearchResults = async (e) => {
    e.preventDefault();
    try {
      const searchResults = await axios.get(`http://localhost:8000/api/product?name=${searchTerm}`);
      setSearchResults(searchResults.data);
      console.log(searchResults.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setSearchTerm('');
    }
  };

  return (
    <>
      <form
        onSubmit={fetchSearchResults}
        className="flex relative mt-8 max-w-full rounded-xl w-full md:w-[480px] flex-wrap"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for luxury items"
          className="flex-1 p-2 text-base leading-6 border-t border-b bg-stone-50 border-stone-300 text-stone-500"
          aria-label="Search for luxury items"
        />

        <button
          onClick={fetchSearchResults}
          type="submit"
          className="flex flex-col justify-center py-2 pr-2 text-base font-bold leading-6 text-center whitespace-nowrap rounded-none border-t border-r border-b bg-stone-50 border-stone-300 text-stone-900"
        >
          <span className="px-5 py-3 bg-amber-500 rounded-xl text-ellipsis">
            Search
          </span>
        </button>
      </form>

      {searchResults && (
        <div className="flex flex-wrap justify-center">
          <Card className="w-full sm:w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out m-4">
            <CardHeader shadow={false} floated={false} className="h-72 cursor-pointer relative">
              <img
                src={searchResults.image}
                alt={searchResults.name}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute top-2 right-2 text-white text-lg">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90a00d6146e26ae98a2dd8e92d5cbe9cdd272d33a878f88e8f43efe16cd1d92?apiKey=cb130a580d494b2d8274b3edb32534b2&"
                  className="w-5 aspect-square"
                />
                <i
                  className="fa fa-heart cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                  }}
                ></i>
              </div>
            </CardHeader>
            <CardBody onClick={() => navigate(`/products/${searchResults._id}`)} className="cursor-pointer p-4">
              <Typography color="blue" className="font-semibold text-lg md:text-xl mb-2">
                {searchResults.name}
              </Typography>
              <Typography color="green" className="font-semibold text-md md:text-lg">
                ${searchResults.price}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 mt-2"
              >
                {searchResults.description ? searchResults.description : "No description available."}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                onClick={() => navigate(`/products/${searchResults._id}`)}
                ripple={false}
                fullWidth={true}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-none hover:scale-105 focus:scale-105 active:scale-100 transition-transform duration-200 ease-in-out"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default SearchBar;
