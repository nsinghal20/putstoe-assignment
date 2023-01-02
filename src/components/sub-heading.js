import React from 'react';
import drop from '../images/a-button-svgrepo-com.svg';
import Card from './card';
export default function Sub_heading(props)
{
 return (
   <React.Fragment>
     <div className='subh-container'>
       <h2 className='subh'>{props.heading}</h2>
       <hr className='subh-hr'></hr>
       <div className='subhcards-container'>
         {props.pdt.map((item) => {
           return <Card pdt={item} src={drop} />;
         })}  

       </div>
     </div>
   </React.Fragment>
 );
}
