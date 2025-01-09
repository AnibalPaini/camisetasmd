import 'bootstrap/dist/css/bootstrap.min.css';
import {products as initialProducts} from "./mocks.json"
import Navbar1 from './components/Navbar/Navbar1.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'
import { useState } from 'react';

function useFilters(){
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

  return {filterProducts, setFilters}
}

function App() {
  const [products]= useState(initialProducts)
  const {filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Navbar1/>
      <ItemListContainer 
        products={filteredProducts}
        changeFilters={setFilters}
      />
      <Footer/>
    </>
  )
}

export default App
