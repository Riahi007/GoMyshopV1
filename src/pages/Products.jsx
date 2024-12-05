import React, { useState } from 'react'
import products from '../products'
import Box from '../components/Box'

function Products() {
    const [product,setProd]=useState('')
    const[select,setSelect]=useState('')

    const filter=products.filter(prod=>{
        const titleSearch=prod.title.toLowerCase().includes(product.toLowerCase())
        const selectCategory=select? prod.category===select:true 
        return titleSearch &&selectCategory
    })
  return (
    <div >
     <input type="text" placeholder='search' className='search' 
     onChange={(e)=>setProd(e.target.value)}/>
     <select className='select' value={select}
     onChange={(e)=>setSelect(e.target.value)}>
        <option value={""}>All</option>
        <option value={"men's clothing"}>men's clothing</option>
        <option value={"women's clothing"}>women's clothing</option>
        <option value={"jewelery"}>jewelery</option>
        <option value={"electronics"}>electronics</option>
       
     </select>
      <div className='list'>  
     {filter.map(prod=>(<Box prod={prod}/>))}
     </div>
    </div>
  )
}

export default Products