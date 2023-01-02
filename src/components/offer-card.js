import React from 'react';
import src from '../images/download.jfif';

export default function Offer(props) {
  return (
    <React.Fragment>
      <div className='offer-container'>
        <div className='oft'>
          <img className='offer-back' src={src} alt=''></img>
          <span class='real-offer'>20 % Off</span>
          <h3 className='topic-offer'>
            <span>{props.topic}</span>
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
}
