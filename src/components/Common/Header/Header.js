import React from 'react'
import "./styles.css"
import TemporaryDrawer from "./Drawer";
import Button from "../Button/Button";



function Header() {
  return (
    <div id="header">
        <h1 className='logo'>Crypto Tracker <span style={{color:"tomato"}}>.</span></h1>
        <div className='links'>
          <a href='/'>
            <p className='link'>Home</p>
          </a>
          <a href='/'>
            <p className='link'>Compare</p>
          </a>
          <a href='/'>
            <p className='link'>Watchlist</p>
          </a>
          <a href='/'>
           <Button text ={"Dashboard"}
            onClick={()=>{console.log("hello")}}
           
           />
          </a>
          
        </div>
        <div className='mobile-drawer'><TemporaryDrawer/></div>
    </div>
  )
}

export default Header;
