import React, { useEffect, useState , useRef } from 'react';

const FilterProducts = () => {
    const lineRef = useRef(null);
    const widthPointRight = useRef(null);
    const widthPointLeft = useRef(null);
    const inputLeft = useRef(null);
    const inputRight = useRef(null);

    const  [whereGetValueLeft, setWhereGetValueLeft] = useState(true);
    const  [whereGetValueRight, setWhereGetValueRight] = useState(true);

    const [leftInputValue, setLeftInputValue] = useState(null);
    const [rightInputValue, setRightInputValue] = useState(null);

    const [leftPointX, setLeftPointX] = useState(0);
    const [rightPointX, setRightPointX] = useState(-222);
    const [positionButtonOne, setPositionButtonOne] = useState(0);
    const [positionButtonTwo, setPositionButtonTwo] = useState(0);
    const [isMovingLeftButton, setIsMovingLeftButton] = useState(false);
    const [isMovingRightButton, setIsMovingRightButton] = useState(false);
    const [checkAscendingOrder, setCheckAscendingOrder] = useState(false);
    const [checkDescendingOrder, setCheckDescendingOrder] = useState(false);

    const [fixMoveRightButton, setFixMoveRightButton] = useState(false);
    const [fixMoveLeftButton, setFixMoveLeftButton] = useState(false);

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
        setFixMoveLeftButton(true);
        if (checkLeftPositionButton) {  
            if (offsetX <= rightPointX - 2 * clientWidth) {
                setLeftPointX(-rightPointX + 1.5 * clientWidth);
                removeMoveOutLeftButton();
                return;
            }

            if (positionButtonOne-clientWidth < clientWidth) { 
                setLeftPointX(0); 
                removeMoveOutLeftButton();
                return;
            }
            removeMoveOutLeftButton();
            setLeftPointX(positionButtonOne - clientWidth); 
            return;
        }

       setFixMoveRightButton(true);
       if (offsetX <= leftPointX + 2 * clientWidth) {
            setRightPointX(-(leftPointX) );
            removeMoveOutRightButton();
            return;
        } 

        if (positionButtonTwo >= 300) { 
            setRightPointX(-222); 
            removeMoveOutRightButton();
            return;
        } 

        removeMoveOutRightButton();
        setRightPointX(-positionButtonTwo +  2 * clientWidth);    
        return;  
    }

    const removeMoveOutRightButton = () => {
        setTimeout(() => {
            setFixMoveRightButton(false);
        }, 2000);
    }

    const removeMoveOutLeftButton = () => {
        setTimeout(() => {
            setFixMoveLeftButton(false);
        }, 2000);
    }


    const leaveMouse = () => {
        setIsMovingRightButton(false);
        setIsMovingLeftButton(false);
    }

    const handleLineMoving = (e) => {
        setPositionButtonOne(e.nativeEvent.layerX);
        setPositionButtonTwo(e.nativeEvent.layerX);
        selectButtonMove();
        sortPriceChange();
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
        if (positionButtonOne <= widthButton * 2) {
            setLeftPointX(0);
            return; 
        };
        if (positionButtonOne - widthButton  >= -rightPointX) { return; };
 
        setLeftPointX(positionButtonOne - widthButton);
        return;
    }

    const buttonMoveTwo = () => {
        const widthButton = widthPointRight.current.clientWidth / 2;
        if (positionButtonTwo >= 246) { 
            setRightPointX(-222);
            return;
        };
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

      
        const inputPriceFirst = inputLeft.current;
        const inputPriceEnd = inputRight.current;
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

        const inputPriceFirst = inputLeft.current;
        const inputPriceEnd = inputRight.current;
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
                    sortingTwo.forEach(function(item) {
                        if (item.classProduct === "chair"){
                            sortingThree.push(item);
                        }
                    });
                    break;
                case "Столы":
                    sortingTwo.forEach(function(item) {
                        if (item.classProduct === "table"){
                            sortingThree.push(item);
                        }
                    });
                    break;
                case "Комплекты":
                    sortingTwo.forEach(function(item) {
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

    const getValueLeft = (e) =>{
        setLeftInputValue(e.target.value);
        setWhereGetValueLeft(false);
    }

    const inputValueLeft = (e) => {
        if (e.key === 'Enter') {
            if (parseInt(inputLeft.current.value) + 1500 < parseInt(inputRight.current.value)){
                setLeftPointX(Math.abs(leftInputValue/50));
                setWhereGetValueLeft(true);
                sortPriceChange();
                return;
            }
            setLeftPointX(-rightPointX);
            setWhereGetValueLeft(true); 
            sortPriceChange();
          }
    }

    const getValueRight = (e) =>{
        setRightInputValue(e.target.value);
        setWhereGetValueRight(false);
    }

    const inputValueRight = (e) => {
        if (e.key === 'Enter') {
            if(parseInt(inputRight.current.value)>13300) { setRightPointX(-222); return; } 
                if (parseInt(inputRight.current.value) > parseInt(inputLeft.current.value) + 1500){ 
                        setRightPointX((-(rightInputValue)/50+50));
                        setWhereGetValueRight(true);
                        sortPriceChange();
                        return;
                    } 
                    setRightPointX(-leftPointX);
                    setWhereGetValueRight(true);  
                    sortPriceChange();
                }
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
                        value={whereGetValueLeft ? leftPointX * 50 : leftInputValue} 
                        onChange={(e) => getValueLeft(e)} 
                        onKeyDown={(e) => inputValueLeft(e)} 
                        className="input-price"
                    />

                    <input 
                        ref = {inputRight}
                        type="number"
                        value = {whereGetValueRight ?  Math.ceil((-(rightPointX-50) * 50)) : rightInputValue}
                        onChange={(e) => getValueRight(e)} 
                        onKeyDown={(e) => inputValueRight(e)} 
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
                                className={`first-point-line ${!isMovingLeftButton && fixMoveLeftButton ? 'transition-point' : ''}`}
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
                                className={`end-point-line ${!isMovingRightButton && fixMoveRightButton ? 'transition-point' : ''}`}
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