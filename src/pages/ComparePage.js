import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoins'
import SelectDays from '../components/CoinPage/SelectDays';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import { coinObject } from '../functions/convertObject';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/CoinPage/Coininfo';
import LineChart from '../components/CoinPage/LineChart';
import { settingChartData } from '../functions/settingChartData';
import { get100Coins } from '../functions/get100Coins';
import TogglePriceType from '../components/CoinPage/PriceType';


function ComparePage() {
  const [allCoins, setAllCoins] = useState([]);
  const [crypto1, setCrypto1] = useState(allCoins[0]?.id ?? "bitcoin");
  const [crypto2, setCrypto2] = useState(allCoins[1]?.id ?? "ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData,setChartData]=useState({
    labels: [],
    datasets: [],
  });

  
   const  handleDaysChange = async(e) =>{
    const newDays= e.target.value;
   setIsLoading(true);
    setDays(newDays);
    const prices1 = await getCoinPrices(crypto1,newDays,priceType);
    const prices2 = await getCoinPrices(crypto2,newDays,priceType);
    
      settingChartData(setChartData,prices1,prices2)
      setIsLoading(false);
  }

  const handlePriceTypeChange = async (e) =>{
    const newPriceType = e.target.value;
    setIsLoading(true);
    setPriceType(newPriceType);
    const prices1 = await getCoinPrices(crypto1,days,newPriceType);
    const prices2 = await getCoinPrices(crypto2,days,newPriceType);
    
      settingChartData(setChartData,prices1,prices2)
    
    
    
      setIsLoading(false);
    
  };


  useEffect(() => {
    getData();

  }, []);

  // async function getData() 
   const getData = async () =>
  {

    setIsLoading(true);
    const coins =await get100Coins();
    if(coins){
      setAllCoins(coins);

    const data1 = await getCoinData(crypto1);
const data2 = await getCoinData(crypto2);
coinObject(setCrypto1Data,data1);
coinObject(setCrypto2Data,data2);

    if (data1 && data2) {
      
      const prices1 = await getCoinPrices(crypto1,days,priceType);
      const prices2 = await getCoinPrices(crypto2,days,priceType);
      
        settingChartData(setChartData,prices1,prices2)
        console.log("bohn prices featced", prices1, prices2)
        setIsLoading(false);

    }

  }

      
      
    }
  

  const handleCoinChange = async (e, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      const newCrypto2 = e.target.value

      setCrypto2(newCrypto2);

      const data2 = await getCoinData(newCrypto2);

      coinObject(setCrypto2Data,data2);

      const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(newCrypto2, days, priceType);
    settingChartData(setChartData,prices1,prices2)
    // if (prices1.length> 0 && prices2.length > 0) {
      
    //   console.log("bohn prices featced", prices1, prices2)
    //   setIsLoading(false);
    // }

    } else {
      const newCrypto1= e.target.value;
      setCrypto1(newCrypto1);

      const data1 = await getCoinData(newCrypto1);

      coinObject(setCrypto1Data,data1);
    
      const prices1 = await getCoinPrices(newCrypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    settingChartData(setChartData,prices1,prices2)

    }

    
    setIsLoading(false);

  };
  return (
    <div>
      <Header />
      { isLoading || !crypto1Data?.id || !crypto2Data?.id ? (
        <Loader />
      ) : (
        <>
          
          <div className='coins-days-flex'>
            <SelectCoins
              allCoins={allCoins}
              crypto1={crypto1}
              handleCoinChange={handleCoinChange}
              crypto2={crypto2}
              days={days}
              handleDaysChange={handleDaysChange}
            />
            

          </div>
          <div className='grey-wrapper'>
              <List coin={crypto1Data}/>
            </div>
            <div className='grey-wrapper'>
              <List coin={crypto2Data}/>
            </div>
            <div className='grey-wrapper'>
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
              <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
            </div>
             <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
            <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} /> 
            
        </>
      )}
    </div>
  )
}

export default ComparePage;





