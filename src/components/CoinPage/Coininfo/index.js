import React, { useState } from 'react'
import "./style.css";



function CoinInfo({heading,desc}) {
    const shortDesc = desc.slice(0,200)+ "<span style='color:var(--grey)'> Read More....</span>";
const longDesc = desc + "<span style='color:var(--grey)'> Read Less....</span>";

const [flag ,setFlage] = useState(false);
  return (
    <div className='grey-wrapper'><h2 className='coin-info-heading'>
        {heading}
        </h2>
        {desc.length >200 ?(
        <p
        onClick={()=>setFlage(!flag)}
         className='coin-info-desc' dangerouslySetInnerHTML={{__html:!flag ?  shortDesc  : longDesc}} />
        ):(
            <p dangerouslySetInnerHTML={{__html:desc}}/>
        )} 
        </div>
  )
}

export default CoinInfo