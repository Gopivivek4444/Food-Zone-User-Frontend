import React from 'react';
import {quotations} from '../data'
const WelcomePage = () => {
  
  return (
    <div className="welcome-page">
      <div className="overlay">
          {quotations.map((quote, index) => (
            
            <div className="quoteContainer">
    
                    <img src={quote.backgroundImage} alt = 'image'/>
               
               <div id='quote'>
                    <h1>{quote.text}</h1>
               </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WelcomePage;
