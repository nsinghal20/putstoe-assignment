import React from 'react';
import drop from '../images/drop-svgrepo-com.svg';
import IntroCards from './intro_cards';
export default function Intro()
{
   const [num, setNum] = React.useState(12);
 return (
   <React.Fragment>
     <div className='intro-container'>
       <div className='intro-1'>
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
       </div>
       <div className='intro-2'>
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
       </div>
       <div className='intro-3'>
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
         <IntroCards src={drop} heading='water bill' />
       </div>
     </div>
   </React.Fragment>
 );
}