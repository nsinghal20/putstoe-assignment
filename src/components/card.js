import React from 'react';

export default function Card(props)
{
 return (
   <React.Fragment>
     <div className='cardling'>
       <img src={props.src} alt=''></img>
       <p>{props.pdt}</p>
     </div>
   </React.Fragment>
 );
}