
import React, { useEffect, useState , useRef } from 'react';

const FilterProducts = () => {
   
    const widthPointOne = useRef(null);
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

       // console.log(widthPointOne.current.clientWidth); This
    }

    const buttonSortAscendingOrder = () =>{
    
    let sorting = [];
    sorting = productList.slice();
   
       sorting.sort(function(a,b) {
            let x = parseInt(a.price.replace(/\D/g,''));
            let y = parseInt(b.price.replace(/\D/g,''));
            return x < y ? -1 : x > y ? 1 : 0;
        });  

        testData = sorting;
       /*  console.log(testData); */
        document.querySelector('.trigger-filter').click();
    }


    const testTwo = ()=>{
        testData = productList;
        document.querySelector('.trigger-filter').click();
    }


    return (
        <div className="box-filter-products">
            <button className="sort-ascending-order"
                    onClick = {(e) => buttonSortAscendingOrder()}  
            >
                Сортировка по возрастанию
            </button>

            <button className="sort-descending-order"
                    onClick = {(e) => testTwo()} 
                    >
                Сортировка по убыванию
            </button>

            <button className="sort-price-order">
                Сортировка по выбраной стоимости
            </button>

            <div class="box-filter-price">
                <div class="box-input">
                    <input 
                        defaultValue={0}
                        value={firstPointX*50} 
                        onChange={(e) => setFirstPointX((e.target.value)/50)} 
                        className="input-price js-input-price-first"

                    />

                    <input 
                        value = {15500 - endPointX*50}
                        className="input-price js-input-price-end"
                
                    />
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
                                ref = {widthPointOne}
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

