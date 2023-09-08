import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import './App.css';
//Layout
import Navbar from './components/Layout/Navber/Navbar';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
//Page
import Desserts from './components/Page/Product/Desserts';
import Drinks from './components/Page/Product/Drinks';
import Home from './components/Home/Home';
import Cart from './components/Page/Cart/Cart';

function App() {
  const [cart, setcart] = useState([])
  const card = (item) => {
    const BestSeller = item.BestSeller === true;

    return (
      <li key={item.id}>
        <div className={`card ${BestSeller ? 'best-seller' : ''}`}>
          {BestSeller && <div className="best-seller-badge">Best Seller</div>}
          <img src={item.image} alt={item.name} />
          <div className="card-body">
            <h2>{item.name}</h2>
            <p>{item.price} Baht</p>
            <button className="btn-cart" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </li>
    );
  };

  const addToCart = (item) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      toast.warning("This product is already in cart.", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {

      setcart((cart) => [...cart, item]);
      toast.success(`Add ${item.name} to cart.`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const removecart = (id) => {
    const result = cart.filter(item => item.id !== id)
    setcart(result)
  }


  const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    for (const product of products) {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  }

  const calculateTotalQuantity = (products) => {
    let totalQuantity = 0;
    for (const product of products) {
      totalQuantity += product.quantity;
    }
    return totalQuantity;
  }

  const toggleQuantity = (id, type) => {
    let updateProduct = cart.map((item) => {
      if (item.id === id) {
        if (type === "increment") {
          return {
            ...item,
            quantity: item.quantity < 8 ? item.quantity + 1 : item.quantity
          }
        }
        if (type === "decrement") {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
      }
      return item
    }).filter((item) => item.quantity !== 0)
    setcart(updateProduct)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar calculateTotalQuantity={calculateTotalQuantity} cart={cart} />
        <Header />
        <Routes>
          <Route path='/' element={<Home card={card} />}></Route>
          <Route path='/Drinks' element={<Drinks card={card} />}></Route>
          <Route path='/Desserts' element={<Desserts card={card} />}></Route>
          <Route path='/Cart' element={<Cart cart={cart} removecart={removecart} calculateTotalPrice={calculateTotalPrice} toggleQuantity={toggleQuantity} />}></Route>
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;

