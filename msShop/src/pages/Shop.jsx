import React from "react";
import { Row, Col } from "react-bootstrap";
import { productList } from "../data/items";
import { Productitem } from "../componenets/Productitem";
export const Shop = () => {
  return (
    <Row xs={1} md={4} className="g-4">
      {productList.map((product) => (
        <Col align="center" key={product.id}>
          <Productitem products={product} />
        </Col>
      ))}
    </Row>
  );
};
