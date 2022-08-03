import React from 'react'
import {Typography,Menu,MenuItem }from "@material-ui/core"
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const Profile = ({duck,account,setduck}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      setduck(!duck)
    };
    const logout=()=>{
     
    }
  return (
    <>
    <Link style={{ color: '#fff',textDecoration: 'none'} }> <Typography onClick={handleClick} style={{color:"#fff",margintop:"55px",textDecoration:"none"}}>{account} </Typography></Link>
    
      <Menu
     
        anchorEl={anchorEl}
        open={!duck}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
     
        <MenuItem style={{margintop:"2vh"}} onClick={()=>{handleClose();logout()}}><LogoutIcon/>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default Profile