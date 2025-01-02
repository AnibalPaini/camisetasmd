import React from 'react'

function Filters(products) {
  return (
    <section className='filtros d-flex justify-content-between'>
        <div>
            <label htmlFor='precio' for="formRange" className="form-label">Precio minimo</label>
            <input type="range" id="precio" className="form-range w-75" min="0" max="1200" step="0.5"></input>
        </div>
        <div>
            <label htmlFor="equipo" className="form-label">Equipos:</label>
            <select className="form-select" aria-label="Default select">
                <option value="all">Todos</option>
                <option value="Boca Juniors">Boca Juniors</option>
                <option value="3">River Plate</option>
            </select>
        </div>
    </section>
  )
}

export default Filters