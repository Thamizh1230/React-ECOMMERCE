import React, {useContext} from 'react'
import './Header.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';
import { stateContext } from '../Context/Statecontext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const {state, dispatch} = useContext(stateContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const gotologout =()=>{
    dispatch({type: "LOGOUT", payload:localStorage.clear() });
  }

  const Navigate =  useNavigate();
  const gotohome =()=>{
    Navigate("/home")
  }

  const gotoaddproduct =()=>{
    Navigate("/addproduct");
  }

  const gotoproduct =()=>{
    Navigate("/product");
  }

  const gotofavourite =()=>{
    Navigate("/favourite");
  }

  const gotocart=()=>{
    Navigate("/cart");
  }
  return (
    <div className='header'>
       <Box lg={{ display: 'flex',  alignItems: 'center' }}>
      <Grid container spacing={2}>
        <Grid lg={2}>
      <div className='logo'>
        <img src={require("../assets/image/reactlogo.png")} alt='logo' />
      </div>
      </Grid>
      
      <Grid lg={4}>
      <div className='searchbox'>
        <span className='search_bar'>
          <input type='text' placeholder='search for products' />
        </span>
        </div>
        
      </Grid>
      
      <Grid lg={4}>
        <span className='headersec'>
        <Button style={{color:"#fff",fontWeight:700, fontSize:"16px"}} onClick={()=>gotohome()} >Home</Button>
       <Button style={{color:"#fff", fontWeight:700,fontSize:"16px"}} onClick={()=>gotoaddproduct()} >Addproduct</Button>
        <Button style={{color:"#fff", fontWeight:700,fontSize:"16px"}} onClick={()=>gotoproduct()} >product</Button>
        <Button style={{color:"#fff",fontWeight:700,fontSize:"16px"}} onClick={()=>gotofavourite()} >Favourite</Button>
        </span>
      </Grid>

      <div className='icon'>
      <Grid lg={2}>
      <ShoppingCartIcon style={{color:"#fff"}} onClick={()=>gotocart()} />
      </Grid>
      </div>
     
      <div className='icons'>
      <Grid lg={4}>
      <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>T</Avatar>
          </IconButton>
        </Tooltip>
      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Button onClick={()=>gotologout()} >Logout</Button>
        </MenuItem>
      </Menu>
      </Grid>
      </div>

        </Grid>

        </Box>
      

     
    </div>
  )
}

export default Header