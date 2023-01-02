import React from 'react';
import Sub_heading from './sub-heading'

export default function Main_headings(props)
{
 const [subh,setSubh]=React.useState([
  'Daily Needs',' Construction','Health','Consultancy'
 ])

 return (
   <React.Fragment>
     <div className='heading-container'>
       <h1 className='mainh'>{props.heading}</h1>
     </div>
   </React.Fragment>
 );
}