import React from "react";

export default function ProductCart(props) {
  return (
    <div className="card m-2 mt-5" style={{ width: 300 }} role="button">
      <div className="imgs">
        <img
          src={props.product_image}
          height={150}
          width={180}
          alt={props.product_name}
          className="borderradious"
        />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h5 className="card-title">{props.product_name}</h5>
          <h6>Price: {`₹${props.our_price}`}</h6>
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
  );
}
