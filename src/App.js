import React from 'react';
import Offer from './components/offer-card';
import Header from './components/header';
import Main_headings from './components/main_heading'
import Intro from './components/intro';
import Sub_heading from './components/sub-heading';
import Content from './content/content';
import Carousel from './components/carousel';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Header />
        <Carousel/>
        <Intro />
        <Main_headings heading='Popular Service Products' />
        <div>
          {Content.map((item) => {
            return <Sub_heading heading={item.heading} pdt={item.pdt} />;
          })}
        </div>
        <Main_headings heading='All Popular Service Provider' />
        <div>
          {Content.map((item) => {
            return <Sub_heading heading={item.heading} pdt={item.pdt} />;
          })}
        </div>
        <Main_headings heading='Services We Provide' />
        
        <div className='offer-component'>
          {Content.map((item) => {
            return <Offer topic='daily needs' />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
