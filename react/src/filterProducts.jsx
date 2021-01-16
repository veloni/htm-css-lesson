
import React, { useEffect, useState } from 'react';

const FilterProducts = () => {
   
    const [firstPointX, setFirstPointX] = useState(0);
    const [endPointX, setEndPointX] = useState(0);
    const [positionButton, setPositionButton] = useState(0);
    const [isMoving, setIsMoving] = useState(false);
    const [isMovingEndButton, setIsMovingEndButton] = useState(false);
    const [isCheckPosition, setIsCheckPosition] = useState(0);

    const buttonMove = (moving ,pointX) => {
   
        if (isCheckPosition < 180)
        {
            isMoving && setFirstPointX((positionButton >= 25 )  ?  (10 + firstPointX) : -10 + firstPointX);
            isMovingEndButton && setEndPointX(positionButton > 25 ? (10 + endPointX) : -10 + endPointX);
            setIsCheckPosition(firstPointX-endPointX);
        }
        else{
            isMoving && setFirstPointX((positionButton >= 25 )  ?  (firstPointX) : -10 + firstPointX);
            isMovingEndButton && setEndPointX(positionButton > 25 ? (10 + endPointX) : endPointX);
            setIsCheckPosition(firstPointX-endPointX);
        }
    }

    return (
        <div className="box-filter-products">
            <button className="sort-ascending-order">
                Сортировка по возрастанию
            </button>

            <div class="box-filter-price">
                <div class="box-input">
                    <input className="input-price">

                    </input>

                    <input className="input-price">
                    
                    </input>
                </div>

                <div className="line-price">
                    <div className="into-line-price">   
                 
                        <div 
                            onMouseUp={(e) => setIsMoving(false)}
                            onMouseDown={(e) => setIsMoving(true)}  
                            onMouseMove={(e) => setPositionButton(e.nativeEvent.offsetX)}
                         
                            style={
                                {
                                    marginLeft: `${firstPointX}px`
                                }
                            }
                            className="first-point-line"
                        >

                        </div>

                        <div 
                            onMouseUp={(e) => setIsMoving(false)}
                            onMouseMove={(e) => buttonMove()}
                            className="true-into-line-price">  
                        </div>

                        <div 
                            onMouseUp={(e) => setIsMovingEndButton(false)}
                            onMouseDown={(e) => setIsMovingEndButton(true)}  
                            onMouseMove={(e) => setPositionButton(e.nativeEvent.offsetX)}
                         
                            style={
                                {
                                    marginLeft: `${endPointX}px`
                                }
                            }

                            className="end-point-line">
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FilterProducts;

