import React from "react";
export default function IntroCards(props)
{
 return (
   <React.Fragment>
     <div className='intro-card-container'>
       <img src={props.src} alt=''></img>
       <span>{props.heading}</span>
     </div>
   </React.Fragment>
 );
}