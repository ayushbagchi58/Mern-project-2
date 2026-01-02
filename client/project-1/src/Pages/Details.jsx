import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../API/functions/singleproduct.api";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const singleFetch = async () => {
      const data = await singleProduct(id);
      setProduct(data);
    };
    singleFetch();
  }, [id]);

  return (
    <Container className="mt-5">
      
      
      <Row className="mb-4">
        <Col className="text-center">
          <h2 className="fw-bold text-success text-uppercase">
            Product Details
          </h2>
          <p className="text-muted">
            Explore complete information about this product
          </p>
        </Col>
      </Row>

      
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <div className="bg-neutral-primary-soft p-4 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
              {product.name}
            </h5>

            <p className="text-body">₹{product.price}</p>
            <p className="text-body">Color: {product.color}</p>
            <p className="text-body">Size: {product.size}</p>
            <p className="text-body">Brand: {product.Brand}</p>
            <p className="text-body">{product.description}</p>

            <Link to="/">
              <Button variant="success" className="mt-3">
                Back
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
