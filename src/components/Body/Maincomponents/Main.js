import React from 'react'
import "./styles.css"
import iphone from "../../../assets/phone.png"
import gradient from "../../../assets/gradient.png"
import Button from '../../Common/Button/Button'
import {motion} from "framer-motion";
function main() {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 className='track-crypto-heading' 
            initial={{x:500}} 
            animate={{x:0}} 
            transition={{ type:"smooth", duration:0.6}}>
                Track Crypto
                </motion.h1>
            <motion.h1 className='real-time-heading' initial={{x:-200}} 
            animate={{x:0}} 
            transition={{type:"smooth", duration:0.6}}>Real Time.</motion.h1>
            <motion.p className='left-p'
            initial={{y:1000}} 
            animate={{y:0}} 
            transition={{type:"smooth", duration:0.8}}>Track crypto through a public api in real time.Visit the dashboard 
            to do so!
            </motion.p>
            <motion.div className='btn-flex'
            initial={{y:1000}} 
            animate={{y:0}} 
            transition={{type:"smooth",duration:1.1}}>
                <Button text ={"Dashboard"} />
                <Button text ={"Share"} outlined={true} />
            </motion.div>
        </div>
        <div className='right-phone'>
            <motion.img src={iphone} className='iphone'
            initial={{y:-20}} 
            animate={{y:20}} 
            transition={{ type:"smooth",repeatType:"mirror",duration:2,repeat:Infinity }}/>
            <img src={gradient} className='gradient'/>
        </div>
        
    </div>
  )
}

export default main
