import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Nav } from './components/Nav';
import { ShopContextProvider } from './context/shopContext';

function App() {
  return (
    <div className="App">
     <ShopContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
     </ShopContextProvider>

      {/* //<button className='btn btn-success'>submit</button> */}
    </div>
  );
}

export default App;
