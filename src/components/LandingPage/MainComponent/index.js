import React from 'react'
import "./style.css";
import Button from '../../Common/Button';
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { RWebShare } from "react-web-share";


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
              <a href='/dashboard'>
                <Button text={"Dashboard"}/>
                </a>
                <RWebShare
        data={{
          text: "Crypto Dashboard made using React JS.",
          url: "https://on.natgeo.com/2zHaNup",
          title: "CryptoDashboard.",
        }}
        onClick={() => console.log("shared successfully!")}
      >
       <Button text={"share"} outlined={true}/>
       </RWebShare>
                
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