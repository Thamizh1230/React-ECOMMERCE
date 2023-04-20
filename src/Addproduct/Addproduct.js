import React, { useState } from 'react'
import './Addproduct.scss';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';

const Addproduct = () => {
  const [productName, setproductName] = useState("");
  const [productDes, setproductDes] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productstock, setproductstock] =useState("");
  const [showError, setshowError] = useState(false);
  const [productArr, setproductArr]= useState(JSON.parse(localStorage.getItem("newarr"))||[]);

  const newproduct =()=>{
    setproductArr([...productArr,{id:Math.floor(Math.random()*10), name:productName, des:productDes, price:productPrice, stock:productstock}])
    console.log(productArr);
  }
    localStorage.setItem("newarr",JSON.stringify(productArr));

const submitHandler=(event)=>{
  event.preventDefault();
  setshowError(true);

  if(productName === "" || productDes === "" || productPrice === "" || productstock === ""){
    setshowError("Fill all the fields")
    return
  }
  console.log(productName,productDes,productPrice, productstock);
  newproduct();
  

}

const Navigate = useNavigate();
const gotohome =()=>{
  Navigate("/home");
}

  return (
    <div className='addproduct'>
      <h1>Add Product</h1>
      
        <div className='addinputs'>
      <form onSubmit={submitHandler}>
      <TextField 
    
    id="outlined-basic" 
    label="ProductName" 
    variant="outlined"  
    onChange={(event)=>{setproductName(event.target.value)}}
     /> <br /> <br />
     

     <TextField
          id="outlined-textarea"
          label="ProductDescription"
          placeholder="Placeholder"
          multiline
          onChange={(event)=>{setproductDes(event.target.value)}}
        /><br /><br />



<TextField
          id="outlined-number"
          label="ProductPrice"
          type="number"
          onChange={(event)=>{setproductPrice(event.target.value)}}
          InputLabelProps={{
            shrink: true,
            
          }}
        /><br /><br />
     
        <TextField
          id="outlined-number"
          label="Productstocke"
          type="number"
          onChange={(event)=>{setproductstock(event.target.value)}}
          InputLabelProps={{
            shrink: true,
            
          }}
        /><br /><br />


    
    <input type='submit' style={{backgroundColor:"green", padding:"10px", color:"#fff"}} />
    <span className='homeicon'>
    <IconButton>
        <HomeIcon onClick={()=>gotohome()} />
      </IconButton>
    </span>
 </form>
      </div>

  </div>
  )
}

export default Addproduct