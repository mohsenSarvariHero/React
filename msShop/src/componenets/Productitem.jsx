import React, { useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
export const Productitem = ({ products }) => {
  const card = useContext(CartContext);
  const productQuantity = card.getProductQuantity(products.id);
  return (
    <Card className="mt-5 card-bg">
      <Card.Body>
        <Card.Img
          variant="top"
          src={products.image}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Title align="right" className="text-light pt-4">
          {products.title}
        </Card.Title>
        <Card.Text align="right" className="text-light" dir="rtl">
          {products.price} تومان
        </Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6" className="text-white">
                تعداد : {productQuantity}
              </Form.Label>

              <Col sm="6">
                <Button
                  sm="6"
                  className="mx-2 text-white"
                  variant="btn btn-outline-secondary"
                  onClick={() => card.addItemToCart(products.id)}
                >
                  +
                </Button>
                <Button
                  sm="6"
                  className="mx-2 text-white"
                  variant="btn btn-outline-secondary"
                  onClick={() => card.removeItemFromCart(products.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              onClick={() => card.deleteFromCart(products.id)}
              className="my-4"
              variant="btn btn-outline-light"
            >
              حذف از سبد خرید
            </Button>
          </>
        ) : (
          <Button
            onClick={() => card.addItemToCart(products.id)}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            افزودن به سبد خرید
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
