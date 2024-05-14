import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import {motion} from "framer-motion";

function Lists({coin}) {


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.tr className='list-row'variants={container}
    initial="hidden"
    animate="visible">
      
    
        <td className='td-image'>
        <img src={coin.image} className='coin-logo'/>
        </td>
        <td>
        <div className='name-col'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
        </div>
       
        </td>
        {coin.price_change_percentage_24h>0?(<td className='chip-flex'>
          <div className='price-chip'>
        <p className='price-change'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
          <div className='icon-chip'>
        <TrendingUpRoundedIcon/>
        </div>
        </td>):(<td className='chip-flex'>
          <div className='price-chip chip-red'>
        <p className='price-change'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        
          </div>
          <div className='icon-chip chip-red'>
        <TrendingDownRoundedIcon/>
        </div>
        </td>)}
       <td>
        <h3 className='coin-price' style={{ color: coin.price_change_percentage_24h > 0 ? "rgb(104, 255, 104)" : "red" }}>
  ${coin.current_price.toLocaleString()}
</h3>
</td>
<td>
        <p className='total-volume'>Total Volume : {coin.total_volume.toLocaleString()}</p>
        <p className='market-cap'> Market Cap : {coin.market_cap.toLocaleString()}</p>
        </td>
    

    </motion.tr>
   
  )
}

export default Lists
