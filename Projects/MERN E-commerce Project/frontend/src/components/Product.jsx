import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";


const Product = ({ product }) => {
  console.log(product.image)
  return (
    <Card style={{height: '22rem' , width:'20rem'}} className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
      
        <Card.Img style={{height: '12rem' , width:'18rem'}} src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews}`} />
        </Card.Text>

        <Card.Text as="h3">₹ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
