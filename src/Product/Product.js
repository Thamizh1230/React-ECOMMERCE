import React from 'react'
import './Product.scss';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {Favorite as FavoriteIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const getproductarr = JSON.parse(localStorage.getItem("setproductarr"));
  // const [display, setDisplay] = useState(getproductarr);
  // console.log(display);

  const Navigate = useNavigate();
  const gotofav=()=>{
    Navigate("/favourite")
  }


    const gotocart=()=>{
      Navigate("/cart");
    }
    

  return (
    <div className='displaysec'>
           
      <h1 style={{color:"#0000ff9e"}}> Product </h1>
      <div className='productimage'>
            <img src={require("../assets/image/cartimage.jpg")} />
            </div>
            <div className="productcontent">
            <h2>{getproductarr.name}</h2>
            <h4 style={{color:"#212121ba"}} >{getproductarr.des}</h4>
            <h3 style={{color:"#253ce0"}}> ₹ {getproductarr.price}</h3>
          <div className='producticon'>
                <FavoriteIcon color='action' onClick={()=>gotofav()} />
             
              <ShoppingCartIcon onClick={()=>gotocart()} />
              </div>
              
              </div>
              
              

    </div>
  )
}

export default Product