import React, { useEffect, useState } from 'react'
import Header from "../../components/Common/Header/Header"
import LabTabs from './TabsComponent/LabTabs'
import axios from 'axios';
import uniqid from 'uniqid';
import {Data} from "./Data"

function Dashboard() {

  const style={
    color:"white",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalize"
  };

  /*useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((res)=>(setCoins(res.data))).catch((err)=>{console.log("err>>>",err)})
  },[])*/
  let [coins,setCoins]=useState(Data);


 
  console.log(coins);
  return (
    <div>
        <Header/>
    
      <LabTabs coins={coins}/>
     
    </div>
  )
}

export default Dashboard
