import React, { useEffect, useState } from 'react';
import Basket from './Basket.jsx';

const renderBasket = () => {
    const [openBusketState, setOpenBusketState] = useState(false);
    const [openBusketForItemsState, setOpenBusketForItemsState] = useState(false);

    const openBusket = () => {
        setOpenBusketForItemsState(!openBusketState);
        setOpenBusketState(!openBusketState);
    }

    const openBusketFromButtonItems = () => {
        if (!openBusketForItemsState){
            setOpenBusketState(true);   
        }
    }

     const closeBusketFromButtonItems = () => {
        if (!openBusketForItemsState){
            setOpenBusketState(false);
        }
    } 

  /*   useEffect(() => {
         console.log(openBusketState); 
    }); */
    
    return (
              <div>
                    <button 
                        className="dn js-trigger-open-basket"
                        onClick={(e) => openBusket()}
                    />

                    <button 
                        className="dn js-trigger-open-basket-for-button"
                        onClick={(e) => openBusketFromButtonItems()}
                    />

                    <button 
                        className="dn js-trigger-close-basket-for-button"
                        onClick={(e) => closeBusketFromButtonItems()}
                    />
                    {openBusketState && <Basket/>}
              </div>
        );
    };

export default renderBasket;