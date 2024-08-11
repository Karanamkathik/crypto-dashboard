import React from 'react'
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import "./style.css";

function BackToTop() {
    
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 ||
     document.documentElement.scrollTop > 300) 
     {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}



  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;

  return (
    <div className='back-to-top' id='myBtn' onClick={()=>
      {document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }}
    >
        <ExpandLessRoundedIcon  style={{color :"var(--blue)"}}/>
    </div>
  )
}

export default BackToTop;