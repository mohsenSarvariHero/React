import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { LoginSignup } from "./pages/LoginSignup";
import { FooterShop } from "./components/FooterShop/FooterShop";
import man_banner from "./components/assets/images/man-banner4.png";
import womman_banner from "../src/components/assets/images/banner_wommen.png";
import kid_banner from "../src/components/assets/images/banner_kids3.png";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={man_banner} category="men" />}
        />
        <Route
          path="/wommen"
          element={<ShopCategory banner={womman_banner} category="wommen" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
        <Route path="/product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <FooterShop />
    </div>
  );
}

export default App;
