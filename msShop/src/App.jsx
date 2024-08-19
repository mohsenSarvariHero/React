import React from "react";
import { Navbar } from "./componenets/Navbar";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { CartProvider } from "./context/CartContext";
const App = () => {
  return (
    <CartProvider>
    <Container>
      <Navbar />
      <Routes>
        <Route index element={<Shop />} />
      </Routes>
    </Container>
    </CartProvider>
  );
};

export default App;
