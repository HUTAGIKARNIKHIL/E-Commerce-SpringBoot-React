import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({cartLength}) {

  const[cartDataLength, setCartDataLength] = useState(0);

  useEffect(()=>{
    setCartDataLength(cartLength);
  },[cartLength,cartDataLength])

  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src='https://cdn-icons-png.flaticon.com/128/869/869636.png' alt='' style={{height:'35px'}}></img> Ecomm</a>
                
                <div>
                    <Link className='btn btn-outline-light' to={"/addProduct"}>➕Add Product</Link>
                    <Link className='btn btn-outline-light mx-3' to={"/cart"}>
                      🛒Cart
                      <span className='rounded-circle bg-warning px-2 mx-1'>{cartDataLength}</span>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
  )
}
