import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import Product from "./Pages/Product/Product";
// import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/product">
            Product
          </Link>
          <Link className="nav-link" to="/chekout">
            Checkout
          </Link>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
