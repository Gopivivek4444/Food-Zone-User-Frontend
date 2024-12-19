import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api';
import { ThreeDots } from 'react-loader-spinner'

const Chains = () => {
  const [vendorRecords, setVendorRecords] = useState({vendors: []});

  const [scrollPosition, setScrollPosition] = useState(0);

  const [loader, setLoader] = useState(true);

  const vendorRecordHandler = async () => {
    try {
      const response = await axios.get(`${API_URL}/vendor/allVendors`);
      setVendorRecords(response.data);
      console.log('this is api data', response.data.vendors);
      setLoader(false)
    } catch (error) {
      alert("Failed to fetch data")
      console.error("Failed to fetch data",error);
      setLoader(true)
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
    {loader?
    <div className="loader">
      <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="orangered"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
      />
    </div>
    :
    <>
    <div className="buttonSection">
      <button onClick={() =>{handleScroll("left")}}>
      <span class="material-symbols-outlined">arrow_circle_left</span>
      </button>  
      <button onClick={() =>{handleScroll("right")}}>
      <span class="material-symbols-outlined">arrow_circle_right</span>
      </button>
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
    </>
    }
    </div>
  );
};

export default Chains;
