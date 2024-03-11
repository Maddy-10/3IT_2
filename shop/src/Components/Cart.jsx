import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../assets/data/ProductList";
import Header from "./Header";

export default function Cart() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:8081/shopserver/api/products.php");
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        if (data.productData && Array.isArray(data.productData)) {
          setProducts(data.productData);
          setLoading(false);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  const params = useParams();
  console.log(products);
  const props = products.find((e) => e.id === parseInt(params.p_id));
  console.log(props);
  console.log('hello');
  return (
    <>
    <Header/>
      <div>
        <div
          className="card m-2 mt-5 cursor-pointer"
          style={{ width: 300 }}
          role="button"
        >
          <div className="imgs">
            <img
              src={`http://localhost:8081/shopserver/images/${props.p_img}`}
              height={150}
              width={180}
              alt={props.p_name}
              className="borderradious"
            />
          </div>
          <div className="card-body">
            <div className="card-title">
              <h5 className="card-title">{props.p_name}</h5>
              <h6>Price: {`₹${props.p_price}`}</h6>
            </div>
            <div className="mb-3">
              {props.stock > 0 ? (
                <button className="btn btn-success">Available</button>
              ) : (
                <p className="text-danger">Out of stock</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
