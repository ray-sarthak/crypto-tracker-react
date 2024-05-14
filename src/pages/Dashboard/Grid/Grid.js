import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import {motion} from "framer-motion";

function Grid({coin,key}) {
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
    <motion.div className='grid-container'
    variants={container}
    initial="hidden"
    animate="visible">
        <div className='info-flex'>
        <img src={coin.image} className='coin-logo'/>
        <div className='name-col'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
        </div>
       
        </div>
        {coin.price_change_percentage_24h>0?(<div className='chip-flex'>
          <div className='price-chip'>
        <p className='price-change'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
          <div className='icon-chip'>
        <TrendingUpRoundedIcon/>
        </div>
        </div>):(<div className='chip-flex'>
          <div className='price-chip chip-red'>
        <p className='price-change'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        
          </div>
          <div className='icon-chip chip-red'>
        <TrendingDownRoundedIcon/>
        </div>
        </div>)}
        <div className='info-container'>
        <h3 className='coin-price' style={{ color: coin.price_change_percentage_24h > 0 ? "rgb(104, 255, 104)" : "red" }}>
  ${coin.current_price.toLocaleString()}
</h3>
        <p className='total-volume'>Total Volume : {coin.total_volume.toLocaleString()}</p>
        <p className='market-cap'> Market Cap : {coin.market_cap.toLocaleString()}</p>
</div>
    </motion.div>
  )
}

export default Grid
