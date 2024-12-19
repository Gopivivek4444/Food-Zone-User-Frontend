import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';

const FirmSection = () => {
  const [FirmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All")

  const [loader, setLoader] = useState(true);

  const FirmSectionHandler = async () => {
    try {
      const response = await axios.get(`${API_URL}/vendor/allVendors`);
      setFirmData(response.data.vendors);
      console.log("Firm Data", FirmData);
      setLoader(false);
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Failed to fetch data", error);
      setLoader(true);
    }
  };

  useEffect(() => {
    FirmSectionHandler();
  }, []);

  const filterHandler = (region) =>{
    setSelectedRegion(region);
  }

  return (
    <div className='firmContainer'>
      {loader?""
      :
      <>
      <h3>Restaurants with online food delivery in Hyderabad</h3>
      <div className="filterButton">
        <button className="btn" onClick={() => filterHandler("All")}>All</button>
        <button className="btn" onClick={() => filterHandler("South-Indian")}>South-Indian</button>
        <button className="btn" onClick={() => filterHandler("North-Indian")}>North-Indian</button>
        <button className="btn" onClick={() => filterHandler("Chinese")}>Chinese</button>
        <button className="btn" onClick={() => filterHandler("Bakery")}>Bakery</button>
      </div>

      <div className="firmDataSection">
        {/* {FirmData.flatMap((vendor) =>
          vendor.firm.map((singleFirm) => {  
              if(selectedRegion === "All" || 
                singleFirm.region.includes(selectedRegion.toLocaleLowerCase())
              ){
                return(
                  <Link to={`/products/${singleFirm._id}/${singleFirm.firmName}`} id='Link'>
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
                )
              }
            })
        )} */}

        {FirmData.flatMap((vendor) =>
          vendor.firm
            .filter(
              (singleFirm) =>
                selectedRegion === "All" ||
                singleFirm.region
                  .map((r) => r.toLowerCase())
                  .includes(selectedRegion.toLowerCase())
            )
            .map((singleFirm) => (
              <Link
                to={`/products/${singleFirm._id}/${singleFirm.firmName}`}
                id="Link"
                key={singleFirm._id}
              >
                <div className="firmData">
                  <div className="imageBlock">
                    <img
                      src={`${API_URL}/uploads/${singleFirm.image}`}
                      alt={singleFirm.firmName}
                    />
                    <div className="offerDiv">{singleFirm.offer}</div>
                  </div>
                  <div className="firmName">{singleFirm.firmName}</div>
                  <div className="firmDetails">
                    <div>{singleFirm.region.join(", ")}</div>
                    <div>{singleFirm.area}</div>
                  </div>
                </div>
              </Link>
            ))
        )}

      </div>
      </>
      }
    </div>
  );
};

export default FirmSection;
