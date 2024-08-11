import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import axios from 'axios';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/CoinPage/Coininfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/CoinPage/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/CoinPage/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import PriceType from '../components/CoinPage/PriceType';
import Button from '../components/Common/Button';


function CoinPage() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(60);
  const [chartData,setChartData] = useState({});
  const [priceType,setPriceType] =useState('prices');
  useEffect(() => {
    if (id) {

     getData();
      
     
    }
  }, [id]);

 const  getData = async()=> {
      setIsLoading(true)
     let data =  await getCoinData(id, setError);
     coinObject(setCoinData,data);
     console.log("Coin DATA>>>>", data);
     if(data){
        // coinObject(setCoinData,data);
        const prices = await getCoinPrices(id,days,priceType,setError);
        if(prices){
          settingChartData(setChartData,prices)
          setIsLoading(false);
        }
     }
    
     
  }
  const handleDaysChange = async (event)=>{
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id,event.target.value,priceType,setError);
        if(prices){
        settingChartData(setChartData,prices)
          setIsLoading(false);
        }
       
  }
  
  const handlePriceTypeChange = async (event) =>{
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id,days,event.target.value);
    if(prices){
    settingChartData(setChartData,prices)
      setIsLoading(false);
    }
  }
  return (
    <div><Header />
      {!error && !isLoading && coinData.id ? (
      
          <>
            <div className='grey-wrapper'>
              <List coin={coinData}  />
            </div>
            
          <div className='grey-wrapper'>
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} priceType={priceType}/>
            
          </div>
            
            <CoinInfo heading={coinData.name} desc={coinData.desc} />
          </>
      ):error?(
        <div>
        <h1 style={{ textAlign: "center" }}>
          Sorry, Couldn't find the coin you're looking for 😞
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
          }}
        >
          <a href="/dashboard">
            <Button text="Dashboard" />
          </a>
        </div>
      </div>
      ):(
        <Loader />
      
        )}
    </div>
  );
}

export default CoinPage;