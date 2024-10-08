import React, { useEffect, useState } from 'react'
import { Select, MenuItem } from '@mui/material';
import { get100Coins } from '../../../functions/get100Coins';
import "./style.css"
import SelectDays from '../../CoinPage/SelectDays';

function SelectCoins({ crypto1, crypto2, handleCoinChange,allCoins,handleDaysChange,days}) {

  // const [allCoins, setAllCoins] = useState([]);
  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  // useEffect(() => {
  //   getData()
  // }, []
  // );
  // async function getData() {
  //   const myCoins = await get100Coins();
  //   setAllCoins(myCoins)
  // }
  return (
    <div className='select-coin-div'>
    <div className='coins-flex'>
      <p>Crypto 1</p>
      <Select
        sx={styles}

        value={crypto1}
        onChange={(event) => handleCoinChange(event, false)}
        label="Crypto 1"

      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
        ) )}

      </Select>
       </div>
       <div className='coins-flex'>
      <p>Crypto 2</p>
      <Select
        sx={styles}
        value={crypto2}
        onChange={(event) => handleCoinChange(event, true)}
        label="Crypto 2">
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, i) => (

            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))}

      </Select>
    </div>
    
    <SelectDays
    days={days}
    handleDaysChange={handleDaysChange}
    noPTag={true}
    />
    </div>
    
  )
}

export default SelectCoins;



