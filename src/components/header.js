import React from 'react';
import loc from '../images/location-2-svgrepo-com.svg';
import bell from '../images/bell-svgrepo-com.svg';
import cart from '../images/cart-svgrepo-com.svg';
import mic from '../images/mic-solid-svgrepo-com.svg';
import search from '../images/search-svgrepo-com.svg';

export default function Header() {
  return (
    <React.Fragment>
      <div className='toolbar'>
        <div className='location-icon'>
          <img className='header-icons' src={loc} alt=''></img>
        </div>
        <div className='location-text'>
          <span className='overflow-control'>
            Harhwa Fatak,Nirala Nagar , Gorakhpur , Nirala Nagar , Uttar Pradesh
            , 273004 , India
          </span>
        </div>
        <div className='bell-icon'>
          <img className='header-icons' src={bell} alt=''></img>
        </div>
        <div className='cart'>
          <img className='header-icons' src={cart} alt=''></img>
        </div>
      </div>
      <div className='search'>
        <form>
          
          <input
            className='search-bar'
            placeholder='Search For Products ....'
          ></input>
        </form>
        <div className='mic'>
          <img className='header-icons' src={mic} alt=''></img>
        </div>
      </div>
    </React.Fragment>
  );
}
