import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "./utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [products, setProducts] = useState(null);
  const {id} = useParams();

  const getproducts = async () => {
    try {
      const { data } = await axios(`/products/${id}`);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);
  return products ? (
    <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={products.image}
        alt="productImage"
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">
          {products.title}
        </h1>
        <h3 className="text-zinc-400 my-5">{products.category}</h3>
        <h2 className="text-red-300 mb-3">$ {products.price}</h2>
        <p className="mb-[5%]">
          {products.description}
        </p>
        <Link className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  ):(
    <Loading/>
  );
};

export default Details;
