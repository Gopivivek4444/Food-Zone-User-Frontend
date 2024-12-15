import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';

const FirmSection = () => {
  const [FirmData, setFirmData] = useState([]);

  const FirmSectionHandler = async () => {
    try {
      const response = await axios.get(`${API_URL}/vendor/allVendors`);
      setFirmData(response.data.vendors);
      console.log("Firm Data", FirmData);
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    FirmSectionHandler();
  }, []);

  return (
    <div className='firmContainer'>
      <h3>Restaurants with online food delivery in Hyderabad</h3>
      <div className="firmDataSection">
        {FirmData.flatMap((vendor) =>
          vendor.firm.map((singleFirm) => (
              <Link to={`/products/${singleFirm._id}`}>
                 <div className="firmData" key={singleFirm._id}>
                    <div className="imageBlock">
                      <img src={`${API_URL}/uploads/${singleFirm.image}`} alt={singleFirm.firmName} />
                      <div className='offerDiv'>{singleFirm.offer}</div>
                    </div>
                    <div className='firmName'>{singleFirm.firmName}</div>
                    <div className='firmDetails'>
                        <div >{singleFirm.region.join(', ')}</div>
                        <div >{singleFirm.area}</div>
                    </div> 
            </div>
              </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default FirmSection;
