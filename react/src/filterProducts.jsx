
import React, { useEffect, useState , useRef } from 'react';

const FilterProducts = () => {
   
    const widthPointOne = useRef(null);
    const [firstPointX, setFirstPointX] = useState(0);
    const [endPointX, setEndPointX] = useState(0);
    const [positionButton, setPositionButton] = useState(0);
    const [isMoving, setIsMoving] = useState(false);
    const [isMovingEndButton, setIsMovingEndButton] = useState(false);
    const [isCheckPosition, setIsCheckPosition] = useState(0);
    const [checkAscendingOrder, setCheckAscendingOrder] = useState(false);
    const [checkDescendingOrder, setCheckDescendingOrder] = useState(false);

/*     console.log(isCheckPosition) */;

    const buttonMove = (moving ,pointX) => {
        const widthButton = widthPointOne.current.clientWidth/2;
        if (isCheckPosition < 240)
        {   
            if (positionButton > widthButton + 5)
            {
                isMoving && setFirstPointX((firstPointX + 5));
                isMovingEndButton && setEndPointX((endPointX - 5));
            }
            if (positionButton < widthButton - 5)
            {
                isMoving && setFirstPointX((firstPointX - 5));
                isMovingEndButton && setEndPointX((endPointX + 5));
            }
            setIsCheckPosition(firstPointX+endPointX);

            if (positionButton > widthButton + 5)
            {
                if (endPointX <= 0)
                {
                    isMovingEndButton && setEndPointX((endPointX));
                }
                isMoving && setFirstPointX((firstPointX + 5));
                }
    
            if (positionButton < widthButton - 5)
            {
                if (firstPointX <= 0)
                {
                    isMoving && setFirstPointX((firstPointX));
                }
                isMovingEndButton && setEndPointX((endPointX + 5));
            } 
        }
        else{
            if (positionButton > widthButton + 5)
            {
                isMoving && setFirstPointX((firstPointX));
                isMovingEndButton && setEndPointX((endPointX - 5));
            }

            if (positionButton < widthButton - 5)
            {
                isMoving && setFirstPointX((firstPointX - 5));
                isMovingEndButton && setEndPointX((endPointX));
            }
            setIsCheckPosition(firstPointX+endPointX);
        }

    }


  
  const buttonSortAscendingOrder = () =>{
        setCheckAscendingOrder(true);
        setCheckDescendingOrder(false);
        let sorting = [];
        sorting = productList.slice();
        sorting.sort(function(a,b) {
            let x = parseInt(a.price.replace(/\D/g,''));
            let y = parseInt(b.price.replace(/\D/g,''));
            return x < y ? -1 : x > y ? 1 : 0;
        });  
      
        const inputPriceFirst = document.querySelector('.js-input-price-first');
        const inputPriceEnd = document.querySelector('.js-input-price-end');
        const inputValueFirst = parseInt(inputPriceFirst.value);
        const inputValueEnd = parseInt(inputPriceEnd.value);

        let sortingTwo = []

        sorting.forEach(function(item, index) {
        
            if(parseInt(item.price) < inputValueEnd)
            {
                if(parseInt(item.price) > inputValueFirst)
                {
                    sortingTwo.push(item);
                }
            } 
            
        });

        const selectType = document.querySelector('.js-select-type-product');
        let sortingThree = []; 
        switch (selectType.value) {
            case "Показать всё":
                sortingThree = sortingTwo;
              break;
            case "Стулья":
                sortingTwo.forEach(function(item, index) {
                    if (item.classProduct === "chair"){
                        sortingThree.push(item);
                    }
                });

              break;
            case "Столы":
                sortingTwo.forEach(function(item, index) {
                    if (item.classProduct === "table"){
                        sortingThree.push(item);
                    }
                });

              break;
            case "Комплекты":
                sortingTwo.forEach(function(item, index) {
                    if (item.classProduct === "set"){
                        sortingThree.push(item);
                    }
                });
              break; 
          }

        testData = sortingThree;
        document.querySelector('.trigger-filter').click();

    }

    const buttonSortDescendingOrder = () =>{
        setCheckDescendingOrder(true);
        setCheckAscendingOrder(false);
        let sorting = [];
        sorting = productList.slice();
        sorting.sort(function(a,b) {
            let x = parseInt(a.price.replace(/\D/g,''));
            let y = parseInt(b.price.replace(/\D/g,''));
            return x < y ? 1 : x > y ? -1 : 0;
        }); 

        const inputPriceFirst = document.querySelector('.js-input-price-first');
        const inputPriceEnd = document.querySelector('.js-input-price-end');
        const inputValueFirst = parseInt(inputPriceFirst.value);
        const inputValueEnd = parseInt(inputPriceEnd.value);

        let sortingTwo = []

        sorting.forEach(function(item, index) {
        
            if(parseInt(item.price) < inputValueEnd)
            {
                if(parseInt(item.price) > inputValueFirst)
                {
                    sortingTwo.push(item);
                }
            } 
            
        });

        const selectType = document.querySelector('.js-select-type-product');
        let sortingThree = []; 
        switch (selectType.value) {
            case "Показать всё":
                sortingThree = sortingTwo;
              break;
            case "Стулья":
                sortingTwo.forEach(function(item, index) {
                    if (item.classProduct === "chair"){
                        sortingThree.push(item);
                    }
                });

              break;
            case "Столы":
                sortingTwo.forEach(function(item, index) {
                    if (item.classProduct === "table"){
                        sortingThree.push(item);
                    }
                });

              break;
            case "Комплекты":
                sortingTwo.forEach(function(item, index) {
                    if (item.classProduct === "set"){
                        sortingThree.push(item);
                    }
                });

              break;
          }

        testData = sortingThree;
        document.querySelector('.trigger-filter').click();
    }

    const sortPriceChange = () =>{
        filterTypeFilter();
    }

    const removeFilter = ()=> {
        testData = productList;
        setCheckAscendingOrder(false);
        setCheckDescendingOrder(false); 
        document.querySelector('.trigger-filter').click();
    }

    const filterTypeFilter = () => {

        if (checkAscendingOrder){
            console.log(checkAscendingOrder);
            buttonSortAscendingOrder();
        }
        if (checkDescendingOrder){
            buttonSortDescendingOrder();
        }
        if (!checkAscendingOrder && !checkDescendingOrder){

            const inputPriceFirst = document.querySelector('.js-input-price-first');
            const inputPriceEnd = document.querySelector('.js-input-price-end');
            const inputValueFirst = parseInt(inputPriceFirst.value);
            const inputValueEnd = parseInt(inputPriceEnd.value);
    
            let sorting = [];
            sorting = productList.slice();
    
            let sortingTwo = [];
            sorting.forEach(function(item, index) {
            
                if(parseInt(item.price) < inputValueEnd)
                {
                    if(parseInt(item.price) > inputValueFirst)
                    {
                        sortingTwo.push(item);
                    }
                } 
                
            });
    
            const selectType = document.querySelector('.js-select-type-product');
            let sortingThree = []; 
            switch (selectType.value) {
                case "Показать всё":
                    sortingThree = sortingTwo;
                  break;
                case "Стулья":
                    sortingTwo.forEach(function(item, index) {
                        if (item.classProduct === "chair"){
                            sortingThree.push(item);
                        }
                    });
    
                  break;
                case "Столы":
                    sortingTwo.forEach(function(item, index) {
                        if (item.classProduct === "table"){
                            sortingThree.push(item);
                        }
                    });
    
                  break;
                case "Комплекты":
                    sortingTwo.forEach(function(item, index) {
                        if (item.classProduct === "set"){
                            sortingThree.push(item);
                        }
                    });
    
                  break;
              }
    
            testData = sortingThree;
            document.querySelector('.trigger-filter').click();
    } 

    }
    const buttonUpReRender = () => {
        setIsMoving(false);
        setIsMovingEndButton(false);
        filterTypeFilter();
    }

    return (
        <div className="box-filter-products">
            <button className="sort-ascending-order style-button-filter"
                    onClick = {(e) => buttonSortAscendingOrder()}  
            >
                Сортировка по возрастанию
            </button>

            <button className="sort-descending-order style-button-filter"
                     onClick = {(e) => buttonSortDescendingOrder()}  
                    >
                Сортировка по убыванию
            </button>

            <button className="sort-price-order style-button-filter"
                    onClick = {(e) => sortPriceChange()}
                    >  
                    Сортировка по выбраной стоимости
                
            </button>

         
                <div class="box-input">
                    <input 
                        defaultValue={0}
                        value={firstPointX*50} 
                        onChange={(e) => setFirstPointX((e.target.value)/50)} 
                        className="input-price js-input-price-first"

                    />

                    <input 
                        defaultValue={15500}
                        value = {15500 - endPointX*50}
                        onChange={(e) => setFirstPointX((e.target.value)/50)} 
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
                                onMouseUp={(e) => buttonUpReRender() }
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
                                onMouseUp={(e) => buttonUpReRender()}
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

                <select className="js-select-type-product style-button-filter"
                         onChange = {(e) => filterTypeFilter()}
                        >

                    <option className="js-switch-period "
                            
                            >
                        Показать всё</option>
                    <option className="js-switch-period">Стулья</option>
                    <option className="js-switch-period">Столы</option>
                    <option className="js-switch-period">Комплекты</option>
                </select>

     
            <button className="sort-price-order style-button-filter"
                        onClick = {(e) => removeFilter()} >
                            Очистить фильтры
            </button>
        </div> 
 
    );
};

export default FilterProducts;

