import React from 'react';
import Footer from './Footer.js'

const Home = (props) => {
  

  return (
    <div>
      <div className='home-background'>
        <h1 className='home-title'>Tech Scope</h1>
        <div className='div-white-line'></div>
          <ul className='home-cat'>
            <li>Ethics</li>
            <li>Society</li>
            <li>Politics</li>
            <li>Global</li>
            <li>Innovation</li>
          </ul>
        <div className='div-white-line'></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
