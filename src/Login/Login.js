import React, { useContext, useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { stateContext } from '../Context/Statecontext';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';



const Login = () => {
    const{state, dispatch} = useContext(stateContext);
    console.log(state, dispatch);
    const[email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState()
    const userData = require("../User.json");
    // console.log(userData);

    const Navigate =  useNavigate();
    const gotohome =()=>{
      Navigate("/home")
    }

   

    const handleSubmit=(event)=>{
      event.preventDefault();

      const getUserdata = userData.find((ele)=>ele.email === email);

      if(email === " " || password === " "){
        setError("Plz Fill all Fields !!! ")
      }else if(!getUserdata){
        setError("Incorrect Entry !!!")
      }else if(getUserdata.password !== password){
        setError("Incorrect password !!!")
      }else{
        notify();
        localStorage.setItem("Login", JSON.stringify(true));
        dispatch({type:"LOGIN", payload: true});
        gotohome();
        
      }

    }
   const notify = () => toast("Login Succesfully !!!");
   <ToastContainer />

  
  return (
    <div className='main'>
      <h1>Login</h1>
      <div className='submain'>
      <Container fixed>
      

    <form onSubmit={handleSubmit}>
         <TextField 
    
            id="outlined-basic" 
            label="Username" 
            variant="outlined"  
            onChange={(event)=>{setUsername(event.target.value)}}
             /> <br /> <br />

   
        <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(event)=>{setPassword(event.target.value)}}
            />  <br /><br />
           

      {error && <p style={{color:"red"}}>{error}</p>}
      <input type='submit' style={{backgroundColor:"green", padding:"10px", color:"#fff"}} />
       
       

     </form>
     </Container>

     {/* <button onClick={()=>notify()}>Notify!</button> */}
     
     </div>
      </div>
  )
}
    


export default Login


{/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
<TextField id="input-with-sx" label="Username" variant="standard"  onChange={(event)=>{setUsername(event.target.value)}} />
</Box>

<FormControl sx={{ m: 1, width: '25ch' }}>
  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
  <OutlinedInput
    id="outlined-adornment-password"
    type={password ? 'text' : 'password'}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
         
          onChange={(event)=>{setPassword(event.target.value)}}
          edge="end"
        >
          {password ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    label="Password"
  />
   </FormControl> */}
