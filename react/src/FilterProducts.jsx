import React, { useEffect, useState , useRef } from 'react';

const FilterProducts = () => {
    const lineRef = useRef(null);
    const widthPointRight = useRef(null);
    const widthPointLeft = useRef(null);

    const inputLeft = useRef(null);
    const inputRight = useRef(null);

    const [leftPointX, setLeftPointX] = useState(0);
    const [rightPointX, setRightPointX] = useState(-216);
    const [positionButtonOne, setPositionButtonOne] = useState(0);
    const [positionButtonTwo, setPositionButtonTwo] = useState(0);
    const [isMovingLeftButton, setIsMovingLeftButton] = useState(false);
    const [isMovingRightButton, setIsMovingRightButton] = useState(false);
    const [checkAscendingOrder, setCheckAscendingOrder] = useState(false);
    const [checkDescendingOrder, setCheckDescendingOrder] = useState(false);
 /*    const [valueRightInput, setValueRightInput] = useState(0); */

    const leftButtonClickCheck = () => {
        setIsMovingLeftButton(true);
    }

    const rightButtonClickCheck = () => {
        setIsMovingRightButton(true);
    }

    const moveClosestButton = (e) => {
        if (e.target === widthPointRight.current) { return; };

        const { clientWidth } = widthPointRight.current;
        const { offsetX } = e.nativeEvent;
        const checkLeftPositionButton = offsetX - leftPointX - clientWidth < -offsetX - rightPointX + clientWidth; 
    
        if (checkLeftPositionButton) {  
            if (offsetX <= rightPointX - 2 * clientWidth) {
                setLeftPointX(-rightPointX + 1.5*clientWidth);
                return;
            }

            if (positionButtonOne-clientWidth < clientWidth) { 
                setLeftPointX(0); 
                return;
            }

            return setLeftPointX(positionButtonOne - clientWidth); 
        }

        ////////

       if (offsetX <= leftPointX + 2 * clientWidth) {
            setRightPointX(-(leftPointX) );
            return;
        } 

        if (positionButtonTwo >= 300) { 
            setRightPointX(-216); 
            return;
        } 

        return setRightPointX(-positionButtonTwo +  2 * clientWidth);      
    }


    const leaveMouse = () => {
        setIsMovingRightButton(false);
        setIsMovingLeftButton(false);
    }

    const handleLineMoving = (e) => {
        setPositionButtonOne(e.nativeEvent.layerX);
        setPositionButtonTwo(e.nativeEvent.layerX);
        selectButtonMove();
    }

    const selectButtonMove = () => {
        if (isMovingLeftButton){
            buttonMoveOne();
  
        }
        if (isMovingRightButton){
            buttonMoveTwo();
        }
    }

    const buttonMoveOne = () => {
        const widthButton = widthPointRight.current.clientWidth / 2;
        if (positionButtonOne <= widthButton) { return; };
        if (positionButtonOne - widthButton  >= -rightPointX) { return; };
        setLeftPointX(positionButtonOne - widthButton);
    }

    const buttonMoveTwo = () => {
        const widthButton = widthPointRight.current.clientWidth / 2;
        if (positionButtonTwo >= 246) { return; };
        if (positionButtonTwo - widthButton  <= leftPointX) { return; };
        setRightPointX(-positionButtonTwo + widthButton);
    }

  const buttonSortAscendingOrder = () => {
        setCheckAscendingOrder(true);
        setCheckDescendingOrder(false);
        let sorting = [];
        sorting = productList.slice();
        console.log(sorting);
        console.log(sorting === productList);
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

            const inputPriceFirst = inputLeft.current;
            const inputPriceEnd = inputRight.current;
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
    const buttonUpReRenderOne = () => {
        setIsMovingLeftButton(false);
        filterTypeFilter();
    }

    const buttonUpReRenderTwo = () => {
        setIsMovingRightButton(false);
        filterTypeFilter();
    }

    const inputValueLeft = (e) => {
        if(parseInt(e.target.value) < parseInt(inputRight.current.value)){
            setLeftPointX(e.target.value/50); 
            return;
        } 
        alert("Братиш лево не может быть меньше чем право");
    }

    const inputValueRight = (e) => {
        const { value } = e.target;

        const isBiggerNumber = parseInt(value) > parseInt(inputLeft.current.value);

        if (isBiggerNumber) {
            setRightPointX(Math.ceil(-value + 2500) / 50);
            return;
        } 
        alert("Братиш лево не может быть меньше чем право");
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

                <div className="box-input">
                    <input 
                        ref = {inputLeft}
                        type="number"
                        value={(leftPointX * 50)} 
                        onChange={(e) => inputValueLeft(e)} 
                        className="input-price"
                    />

                    <input 
                       ref = {inputRight}
                        type="number"
                        value = {Math.ceil((-(rightPointX-50) * 50))}
                        onChange={(e) => inputValueRight(e)} 
                        className="input-price"
                    />
                </div>

                <div className="line-price">
                    <div className="into-line-price">   
                        <div 
                            ref = {lineRef}
                            onMouseUp={() => leaveMouse()}
                            onMouseDown={(e) => moveClosestButton(e)}
                            onMouseMove={(e) => handleLineMoving(e)}
                            onMouseLeave={() => leaveMouse()}
                            className="true-into-line-price">  

                            <div 
                                ref = {widthPointLeft}
                                onMouseUp={() => buttonUpReRenderOne()}
                                onMouseDown={() => leftButtonClickCheck()}  
                                style={
                                    {
                                        transform: `translateX(${leftPointX}px)`
                                    }
                                }
                                className={`first-point-line ${!isMovingLeftButton ? 'transition-point' : ''}`}
                            >
                            </div>

                            <div 
                                ref = {widthPointRight}
                                onMouseUp={() => buttonUpReRenderTwo()}
                                onMouseDown={() => rightButtonClickCheck()}  
                                style={
                                    {
                                        transform: `translateX(${-rightPointX}px)`
                                    }
                                }
                                className={`end-point-line ${!isMovingRightButton ? 'transition-point' : ''}`}
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <select className="js-select-type-product style-button-filter"
                         onChange = {() => filterTypeFilter()}
                        >
                    <option className="js-switch-period"> Показать всё</option>
                    <option className="js-switch-period">Стулья</option>
                    <option className="js-switch-period">Столы</option>
                    <option className="js-switch-period">Комплекты</option>
                </select>

            <button className="sort-price-order style-button-filter"
                    onClick = {() => removeFilter()} 
                    >
                    Очистить фильтры
            </button>
        </div> 
 
    );
};

export default FilterProducts;

