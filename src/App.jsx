import 'bootstrap/dist/css/bootstrap.min.css';
import {products as initialProducts} from "./mocks.json"
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [products]= useState(initialProducts)
  const [filters, setFilters]= useState({
    equipo:"all",
    minPrice:0
  })

  const filterProducts= (products)=>{
    return products.filter(product =>{
      return(
        product.precio>= filters.minPrice &&(
          filters.equipo==="all" ||
          product.equipo=== filters.equipo
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Navbar/>
      <ItemListContainer products={filteredProducts}/>
      <Footer/>
    </>
  )
}

export default App
