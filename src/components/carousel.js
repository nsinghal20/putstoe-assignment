import React from 'react';
import src from '../images/download.jfif'
import src2 from '../images/grocery.jfif';
export default function Carousel()
{
 return (
   <React.Fragment>
     <div class='carousal-container '>
       <div id='myCarousel' class='carousel slide' data-ride='carousel'>
         <ul class='carousel-indicators'>
           <li data-target='#myCarousel' data-slide-to='0' class='active'></li>
           <li data-target='#myCarousel' data-slide-to='1'></li>
           <li data-target='#myCarousel' data-slide-to='2'></li>
           <li data-target='#myCarousel' data-slide-to='3'></li>
         </ul>

         <div class='carousel-inner'>
           <div class='carousel-item active'>
             <img src={src} alt=''  />
           </div>
           <div class='carousel-item'>
             <img src={src2} alt='' />
           </div>
           <div class='carousel-item'>
             <img src={src} alt=''  />
           </div>
           <div class='carousel-item'>
             <img src={src2} alt=''  />
           </div>
         </div>

         <a class='carousel-control-prev' href='#myCarousel' data-slide='prev'>
           <span class='carousel-control-prev-icon'></span>
         </a>
         <a class='carousel-control-next' href='#myCarousel' data-slide='next'>
           <span class='carousel-control-next-icon'></span>
         </a>
       </div>
     </div>
   </React.Fragment>
 );
}