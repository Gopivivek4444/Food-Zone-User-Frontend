import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api';

const Chains = () => {
  const [vendorRecords, setVendorRecords] = useState({vendors: []});

  const [scrollPosition, setScrollPosition] = useState(0);


  const vendorRecordHandler = async () => {
    try {
      const response = await axios.get(`${API_URL}/vendor/allVendors`);
      setVendorRecords(response.data);
      console.log('this is api data', response.data.vendors);
    } catch (error) {
      alert("Failed to fetch data")
      console.error("Failed to fetch data",error);
    }
  };

  useEffect(() => {
    vendorRecordHandler();
  }, []);


  const handleScroll  = (direction) =>{
        const gallery = document.getElementById('firmSection');
        const scrollAmount = 1000;

        if(direction === "left")
        {
          gallery.scrollTo({
            left: gallery.scrollLeft - scrollAmount,
            behavior:"smooth"
          })
        } else if(direction === "right"){
          gallery.scrollTo({
            left: gallery.scrollLeft + scrollAmount,
            behavior:"smooth"
          })
        }
  }

  return (
    <div className='chainContainer'>
    <div className="buttonSection">
      <button onClick={() =>{handleScroll("left")}}>left</button>  
      <button onClick={() =>{handleScroll("right")}}>right</button>
    </div>
    
     <h3>Top Restaurants In India</h3>
    <div className="firmSection" id='firmSection' onScroll={(e) =>{setScrollPosition(e.target.scrollLeft)}}>
     
      { vendorRecords.vendors && vendorRecords.vendors.map((vendor) =>{
        return(
          <div className="vendorInfo" key={vendor._id}>
            {vendor.firm.map((singleFirm) =>{
              return(
              <div className="firmInfo" key={singleFirm._id}>
                <div className='imageContainer'>
                  <img src={`${API_URL}/uploads/${singleFirm.image}`}/>
                </div>
                <div>
                {singleFirm.firmName}
                </div>
                <div>
                  {singleFirm.area}
                </div>
              </div>
              )
            })}
          </div>
        )
      })}
    </div>
    </div>
  );
};

export default Chains;
