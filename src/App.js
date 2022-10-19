import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Login' element={<Login/>} />
      <Route exact path='/Register' element={<Register/>} />
      <Route exact path='/Products' element={<Products/>} />
      <Route exact path='/Product/:id' element={<Product/>} />
      <Route exact path='/Cart' element={<Cart/>} />
    </Routes>
    </>
  );
}

export default App;
