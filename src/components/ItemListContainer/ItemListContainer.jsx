import React from 'react'
import Filters from '../Filters/Filters'


function ItemListContainer({products, changeFilters}) {
  
  return (
    <main className="container-sm mt-5">
      <Filters onChange={changeFilters}/>
        <h2 className='fontP'>Productos</h2>
        <div className="container">
            <div className="row">
              {products.map((product)=>(
                <div className="col-12 col-sm-6 col-lg-4 mb-4" key={product.id}>
                    <div className='card'>
                      <img src={product.imagenes[0]} alt="" className='card-img-top img-fluid img-product'/>
                      <div className='card-body'>
                        <h5 className='card-title'>{product.titulo}</h5>
                        <p className='card-text'>{product.descripcion}</p>
                        <p className='card-text'>${product.precio}</p>
                        <button className='btn btn-secondary w-100'>Agregar al carrito</button>
                      </div>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </main>
  )
}

export default ItemListContainer