import './App.css';
import Navbar from './components/Navber/Navbar';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Desserts from './components/product/Desserts';
import Drinks from './components/product/Drinks';
import Others from './components/product/Others';
import Home from './components/Home/Home';
import { useState } from 'react';
import Cart from './components/Cart/Cart';


function App() {


  const [cart, setcart] = useState([])

  const card = (item) => {
    return (
      <li key={item.id}>
        <div className="card">
          <img src={item.image} alt={item.name} />
          <div className="card-body">
            <h2>{item.name}</h2>
            <p>{item.price} Baht</p>
            <button className="btn-cart" onClick={() => addTocart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </li>
    );
  };

  const addTocart = (item) => {
    setcart((cart) => [...cart, item])
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
        <Navbar calculateTotalQuantity={calculateTotalQuantity} cart={cart} />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Drinks' element={<Drinks card={card} />}></Route>
          <Route path='/Desserts' element={<Desserts card={card} />}></Route>
          <Route path='/Others' element={<Others />}></Route>
          <Route path='/Cart' element={<Cart cart={cart} removecart={removecart} calculateTotalPrice={calculateTotalPrice} toggleQuantity={toggleQuantity} />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

