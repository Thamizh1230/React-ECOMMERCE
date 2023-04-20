import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import React, { useReducer } from 'react'
import Login from './Login/Login'
import Home from './Home/Home'
import Product from './Product/Product'
import Cart from './Cart/Cart'
import Addproduct from './Addproduct/Addproduct'
import Favourite from './Favourite/Favourite'
import Header from "./Header/Header";
import { stateContext } from "./Context/Statecontext"
import { stateReducer,initialState } from "./Context/StateReducer";



const Router = () => {
   const [state, dispatch]=useReducer(stateReducer, initialState);
    
  return (
    <stateContext.Provider value={{state, dispatch}}>
         <BrowserRouter>
         {state?.isLoggedin ? ( 
            <>   <div> <Header />
            </div>
            <Routes>
                <Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/addproduct" element={<Addproduct />}></Route>
                    <Route path="favourite" element={<Favourite />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route path="*" element={<Navigate to={"/home"}></Navigate>}></Route>

                </Route>
            </Routes>
            </> ):(     
             <Routes>
                <Route>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>


                </Route>
            </Routes>)}
          
        </BrowserRouter>
    </stateContext.Provider>
   
  )
}

export default Router