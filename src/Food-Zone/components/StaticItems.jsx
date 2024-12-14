import React, { useState } from 'react'
import { itemData } from '../data'
const StaticItems = () => {

    const [Items, setItems] = useState(itemData);

  return (
    <div className="itemSection">
        {Items.map((item) =>{
            return(
                <div className="items" key={item.key}>
                    <img src={item.itemImg} alt='image'/>
                </div>
            )
        })}
    </div>
  )
}

export default StaticItems