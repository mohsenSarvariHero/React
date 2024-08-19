import React, { useContext, useState } from "react";
import { Navbar as NavbarBs, Button, Modal, Card } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { CardProduct } from "./CardProduct";
import { productList } from "../data/items";

export const Navbar = () => {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <NavbarBs className="border-bottom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ({productCount}) <BsCart className="mx-2"></BsCart>سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal
        show={showModal}
        onHide={handleClose}
        contentClassName="card-bg"
        dir="rtl"
      >
        <Modal.Header>
          <Modal.Body>
            {productCount > 0 ? (
              <>
                <h3>سبد خرید </h3>
                {cart.items.map((item) => (
                  <CardProduct
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  />
                ))}
                <h3> مجموع قیمت: {cart.getTotalAmount()}</h3>
              </>
            ) : (
              <h4>"لیست شما خالی است"</h4>
            )}
            <Button
              onClick={handleClose}
              variant="btn btn-outline-secondary"
              className="mt-4 mx-3 text-white"
            >
              بستن
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};
