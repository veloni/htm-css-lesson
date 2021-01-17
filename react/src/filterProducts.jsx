
import React, { useEffect, useState } from 'react';

const FilterProducts = () => {
   
    const [firstPointX, setFirstPointX] = useState(0);
    const [endPointX, setEndPointX] = useState(0);
    const [positionButton, setPositionButton] = useState(0);
    const [isMoving, setIsMoving] = useState(false);
    const [isMovingEndButton, setIsMovingEndButton] = useState(false);
    const [isCheckPosition, setIsCheckPosition] = useState(0);

    const buttonMove = (moving ,pointX) => {
    /*   console.log(isCheckPosition);
      console.log(firstPointX);
      console.log(endPointX); */
    //test need rework
        if (isCheckPosition < 280)
        {   
            if (positionButton > 20)
            {
                isMoving && setFirstPointX((firstPointX + 5));
                isMovingEndButton && setEndPointX((endPointX - 5));
            }
            if (positionButton < 10)
            {
                isMoving && setFirstPointX((firstPointX - 5));
                isMovingEndButton && setEndPointX((endPointX + 5));
            }
            setIsCheckPosition(firstPointX+endPointX);

            if (positionButton > 20)
            {
                if (endPointX <= 0)
                {
                    isMovingEndButton && setEndPointX((endPointX));
                }
                isMoving && setFirstPointX((firstPointX + 5));
                }
    
            if (positionButton < 10)
            {
                if (firstPointX <= 0)
                {
                    isMoving && setFirstPointX((firstPointX));
                }
                isMovingEndButton && setEndPointX((endPointX + 5));
            } 
        }
        else{
            if (positionButton > 20)
            {
                isMoving && setFirstPointX((firstPointX));
                isMovingEndButton && setEndPointX((endPointX - 5));
            }

            if (positionButton < 10)
            {
                isMoving && setFirstPointX((firstPointX - 5));
                isMovingEndButton && setEndPointX((endPointX));
            }
            setIsCheckPosition(firstPointX+endPointX);
        }
    }

    return (
        <div className="box-filter-products">
            <button className="sort-ascending-order">
                Сортировка по возрастанию
            </button>

            <button className="sort-descending-order">
                Сортировка по убыванию
            </button>

            <button className="sort-price-order">
                Сортировка по выбраной стоимости
            </button>

            <div class="box-filter-price">
                <div class="box-input">
                    <input 
                    value = {firstPointX*50}
                    className="input-price js-input-price-first">

                    </input>

                    <input 
                    value = {15500 - endPointX*50}
                    className="input-price js-input-price-end">
                    
                    </input>
                </div>

                <div className="line-price">
                    <div className="into-line-price">   
                
                        <div 
                            onMouseUp={(e) => setIsMoving(false)}
                            onMouseMove={(e) => buttonMove()}
                            className="true-into-line-price">  


                            <div 
                                onMouseUp={(e) => setIsMoving(false) && setIsMovingEndButton(false)}
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
                                onMouseUp={(e) => setIsMovingEndButton(false) && setIsMoving(false)}
                                onMouseDown={(e) => setIsMovingEndButton(true)}  
                                onMouseMove={(e) => setPositionButton(e.nativeEvent.offsetX)}
                            
                                style={
                                    {
                                        marginRight: `${endPointX}px`
                                    }
                                }

                                className="end-point-line">
                            </div>
                       
                        </div>
                     
                       
                    </div>
                </div>

                <select className="js-select-type-product">

                    <option className="js-switch-period">Стулья</option>
                    <option className="js-switch-period">Столы</option>
                    <option className="js-switch-period">Комплекты</option>
                </select>

                <button className="sort-price-order">
                            очистить фиьлтры
                </button>


            </div>
        </div>
    );
};

export default FilterProducts;

