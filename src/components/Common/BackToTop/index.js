// import React from 'react'
// import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
// import "./style.css";

// function BackToTop() {
    
// let mybutton = document.getElementById("myBtn");


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 300 ||
//      document.documentElement.scrollTop > 300) 
//      {
//     mybutton.style.display = "flex";
//   } else {
//     mybutton.style.display = "none";
//   }
// }



//   // document.body.scrollTop = 0;
//   // document.documentElement.scrollTop = 0;

//   return (
//     <div className='back-to-top' id='myBtn' onClick={()=>
//       {document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//     }}
//     >
//         <ExpandLessRoundedIcon  style={{color :"var(--blue)"}}/>
//     </div>
//   )
// }

// export default BackToTop;

import React, { useEffect } from 'react';
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import "./style.css";

function BackToTop() {
  
  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    const scrollFunction = () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.onscroll = scrollFunction;

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className='back-to-top' id='myBtn' onClick={() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }}>
      <ExpandLessRoundedIcon style={{color: "var(--blue)"}}/>
    </div>
  );
}

export default BackToTop;
