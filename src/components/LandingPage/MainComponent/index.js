import React from 'react'
import "./style.css";
import Button from '../../Common/Button';
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";



function MainComponent() {
  return (
    <div className='main-flex'>
         <div className='left-component'>
            <h1 className='heading1'>Track Crypto</h1>
            <h1 className='heading2'>Real Time.</h1>
            <p className='info-text'>
                Track crypto through a public api in real time. Visit the dashboard to
            do so!
            </p>
            <div className='btn-flex'>
                <Button text={"Dashboard"}/>
                <Button text={"share"} outlined={true}/>
            </div>
         </div>
         <div className='gradient-div'>
            <img src={iphone} className='iphone'/>
            <img src={gradient} className='gradient'/>
         </div>
    </div>
   
  )
}

export default MainComponent;