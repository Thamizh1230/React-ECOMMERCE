import React, { useState } from 'react'
import './Cart.scss';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartdata = JSON.parse(localStorage.getItem("Addtocart"));
  // localStorage.removeItem("Addtocart");
  const [cartproduct, setcartproduct] = useState(cartdata);
  // console.log(cartproduct);

//increment function

const increment=(id)=>{
  let finddata=cartproduct.find((item)=>{
    return item.id ===id;   
});
if(finddata){
  let updatecartitem = cartproduct.map((item)=>{
      if(item.id === id){
        if(item.quantity<=item.stock){
          item.quantity +=1;
          return item;
        }else{
          return item;
       }
          }else{
          return item;
      }
  });
  setcartproduct(updatecartitem)
          }else{
       let newitem = cartdata.find((item)=>{
           return  item.id === id;
       });
        newitem.quantity = 1;
        setcartproduct([...cartproduct, newitem]);
        }

}

//decrement function

const decrement=(id)=>{
  let finddata=cartproduct.find((item)=>{
    return item.id ===id;
});
if(finddata){
  if(finddata.quantity===1){
    let updatecartitem=cartproduct.filter((item)=>{
        return item.id !== id;
    });
    setcartproduct(updatecartitem);
   
  }else{
    let updatecartitem=cartproduct.map((item)=>{
        if (item.id ===id){
            item.quantity -= 1;
            return item;
        }else 
        return item
    })
    setcartproduct(updatecartitem);
  }
}
}


  //delete function
 const deletedata =(id)=>{
  console.log(id);
  setcartproduct(()=>cartproduct.filter((item)=>item.id != id));
  console.log(cartproduct);
 };

 localStorage.setItem("Addproduct",JSON.stringify(cartproduct));


const Navigate = useNavigate();
const gotofav=()=>{
  Navigate("/favourite")
}



  return (
    <div>
      <Container fixed>
      <h1>Cart Items... </h1>
    
          <Grid2 container spacing={4}>
            {cartproduct?.map((item, index)=><Grid2 key={index} item lg={4}>
              <div className='product'>

            <img src={require("../assets/image/cartimage.jpg")}  />
            <div className='procontent'>
            <h2>{item.name}</h2>
            <h4 style={{color:"#212121ba"}} >{item.des}</h4>
            <h3 style={{color:"#253ce0"}}> ₹ {item.price}</h3>
            <div className='producticon'>
              
              <AddBoxIcon className='add'onClick={()=>increment(item.id)} />
              {item.quantity}

              <RemoveCircleIcon className='sub' onClick={()=>decrement(item.id)} />
              <div className='producticons'>
              <FavoriteIcon onClick={()=>gotofav()} />
              <ShareIcon/>
              <DeleteIcon onClick={()=>deletedata(item.id)} />
              </div>


            </div>

              
              </div>
              </div>
              
          </Grid2>)}
            
               </Grid2>
       
      </Container>
    </div>
  )
}

export default Cart