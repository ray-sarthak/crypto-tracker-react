import React from 'react'
import "./styles.css"
import TemporaryDrawer from "./Drawer";
import Button from "../Button/Button";
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import  {Link} from "react-router-dom";


function Header() {
  return (
    <div id="header">
      <h1 className='logo'>Crypto Tracker <span id="dot"style={{color: "#39FF14", fontSize: "1rem"}}><ShowChartRoundedIcon /></span></h1>

        <div className='links'>
          <Link to='/'>
            <p className='link'>Home</p>
          </Link>
          <Link to='/comparepage'>
            <p className='link'>Compare</p>
          </Link>
          <Link to='/watchlist"'>
            <p className='link'>Watchlist</p>
          </Link>
          <Link to ='/dashboard'>
           <Button text ={"Dashboard"}
            onClick={()=>{console.log("hello")}}
           
           />
          </Link>
          
        </div>
        <div className='mobile-drawer'><TemporaryDrawer/></div>
    </div>
  )
}

export default Header;
