import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignIn } from "./componenets/SignIn";
import { Home } from "./componenets/Home";
import { Nav } from "./componenets/nav";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signn" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
