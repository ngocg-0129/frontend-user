import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import CheckOutPage from './pages/CheckOutPage';
import ProductDetail from './components/ShopPage/ListProducts/ProductDetail';
import ProductList from './components/ShopPage/ListProducts/ProductLists';
import ProductPage from './pages/ProductPage';


function App() {


  return (
    <>
    <Router> 
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/shop" element={<ShopPage />} /> 
        <Route path="/product/:id" element={<ProductPage />} /> 
      </Routes> 
    </Router> 
    
      </>
  )
}

export default App;
