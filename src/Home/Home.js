
import { Button} from '@mui/material';
import './Home.scss';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { stateContext } from '../Context/Statecontext';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {Favorite as FavoriteIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material/';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const productlist = JSON.parse(localStorage.getItem("newarr"));
  const [data, setData] = useState(productlist);
  const [cartitem, setcartItem]=useState(JSON.parse(localStorage.getItem("Addtocart")) ||[]);
  const [getproduct, setProduct] = useState("");
  const [favourite, setfavourite]= useState(JSON.parse(localStorage.getItem("favitem")) ||[]);
  // console.log(cartitem);


const Navigate = useNavigate();
  const gotofav=()=>{
    Navigate("/favourite")
  }

    const gotoproduct=()=>{
      Navigate("/product")

    }

    //set product page
    const productFun=(item)=>{
      setProduct(item)
      if(getproduct != ""){
        localStorage.setItem("setproductarr", JSON.stringify(getproduct));
        gotoproduct();
         
      }
 }
    

 //Favourite function
const favouriteFun =(item)=>{
  setfavourite(item)
  
  localStorage.setItem("favouriteitem", JSON.stringify(favourite));
  // gotofav();
  // console.log("favourite");
  
 }


//add to cart function
    const addcartItem =(id)=>{
      let finddata = cartitem.find((item)=>item.id === id);

    if (finddata){

      let updatecartlist = cartitem.map((item)=>{
      
          if(item.id === id){
           if(item.quantity<=item.stock) {
            item.quantity+=1;
            return item
          }
          }else
              return item;
      })
      
      setcartItem(updatecartlist) ;
      console.log(updatecartlist);
    }    
    else{
      let newItemcart = data.find((item)=>{
          return item.id === id;
      })
      newItemcart.quantity = 1;
      setcartItem([...cartitem, newItemcart] )
      // console.log(cartitem);
    }
  };
  localStorage.setItem("Addtocart", JSON.stringify(cartitem))
  const notify = () => toast("Added to Cart!");


  return (
    <div className='home'>
      <Container fixed>
      <h1>Recently Viewed Products </h1>
    
          <Grid2 container spacing={4}>
            {data?.map((item, index)=><Grid2 key={index} item lg={4}>
              <div className='product'>
            <img src={require("../assets/image/cartimage.jpg")} onClick={()=>productFun(item)} />
            <div className='procontent'>
            <h2>{item.name}</h2>
            <h4 style={{color:"#212121ba"}} >{item.des}</h4>
            <h3 style={{color:"#253ce0"}}> ₹ {item.price}</h3>
          <div className='favicon'>
                <FavoriteIcon onClick={()=>favouriteFun(item)} />
             
              <ShoppingCartIcon onClick={()=>addcartItem(item.id) } />
              <ToastContainer />
              </div>
              
              </div>
              </div>
              
          </Grid2>)}
            
               </Grid2>
       
      </Container>
    
      
      
    </div>
  )
}

export default Home
