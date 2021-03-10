import React, { useState , useRef } from 'react';

// all states and functiions to hooks
const FilterProducts = () => {

	const lineRef = useRef(null);
	const widthPointRight = useRef(null);
	const widthPointLeft = useRef(null);
	const inputLeft = useRef(null);
	const inputRight = useRef(null);

	const [whereGetValueLeft, setWhereGetValueLeft] = useState(true); 
	const [whereGetValueRight, setWhereGetValueRight] = useState(true);

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

	const [fixMoveRightButton, setFixMoveRightButton] = useState(false)
	const [fixMoveLeftButton, setFixMoveLeftButton] = useState(false);

	const stepMoveCircle = 50;

	const moveClosestButton = (e) => {
		if (e.target === widthPointRight.current) { return; };

		const { clientWidth } = widthPointRight.current;
		const { offsetX } = e.nativeEvent;
		const checkLeftPositionButton = offsetX - leftPointX - clientWidth < -offsetX - rightPointX + clientWidth; // unreadable constuction
		
		setFixMoveLeftButton(true);

		if (checkLeftPositionButton) {
			handleLeftPositionButton(offsetX);
			return;
		}

		setFixMoveRightButton(true); 

	  if (offsetX <= leftPointX + 2 * clientWidth){ 
			setRightPointX(-(leftPointX));
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
	};

	const removeMoveOutRightButton = () => {
		setTimeout(() => {
			setFixMoveRightButton(false);
		}, 2000);
	};

	const removeMoveOutLeftButton = () => {
		setTimeout(() => {
			setFixMoveLeftButton(false);
		}, 2000);
	};

	const leaveMouse = () => {
		setIsMovingRightButton(false);
		setIsMovingLeftButton(false);
	};

	const handleLineMoving = (e) => { 
		const { layerX } = e.nativeEvent;
		
		setPositionButtonOne(layerX);
		setPositionButtonTwo(layerX);

		selectButtonMove();
		filterTypeFilter();

	};

	const selectButtonMove = () => { 
		isMovingLeftButton && buttonMoveOne();
		isMovingRightButton && buttonMoveTwo();
	};

	const buttonMoveOne = () => {
		const widthButton = widthPointRight.current.clientWidth / 2;

		if (positionButtonOne <= widthButton * 2) {
			setLeftPointX(0);
			return;
		};

		if (positionButtonOne - widthButton  >= -rightPointX) { return; };

		setLeftPointX(positionButtonOne - widthButton);
	};

	const buttonMoveTwo = () => {
		const widthButton = widthPointRight.current.clientWidth / 2;

		if (positionButtonTwo >= 246) {
			setRightPointX(-222);
			return;
		}

		if (positionButtonTwo - widthButton  <= leftPointX) { return; };

		setRightPointX(-positionButtonTwo + widthButton);
	};

	///Sorting function
	const buttonSortAscendingOrder = () => {
		setCheckAscendingOrder(true);
		setCheckDescendingOrder(false);

		sortingPriceAscendingOrDescending(1);
	};

	const buttonSortDescendingOrder = () => {
		setCheckDescendingOrder(true);
		setCheckAscendingOrder(false);

		sortingPriceAscendingOrDescending(-1);
	};

	const filterTypeFilter = () => {
		if (checkAscendingOrder) {
			sortingPriceAscendingOrDescending(1);
			return;
		}

		if (checkDescendingOrder) {
			sortingPriceAscendingOrDescending(-1);
			return;
		}

		sortingPriceAscendingOrDescending('', true);
	};

	const sortingPriceAscendingOrDescending = (sign, dontHaveFilter) => {
		const sorting = productList.slice();

		const filteredList = sorting.filter(filterSortedProducts);

		if (dontHaveFilter) {
			_sortingData = filteredList;

			document.querySelector('.trigger-filter').click();
			return;
		}

		const sortedProductList = filteredList.sort((a, b) => {
			const x = parseInt(a.price.replace(/\D/g,''));
			const y = parseInt(b.price.replace(/\D/g,''));
			return x < y ? -1 * sign : x > y ? 1 * sign : 0;
		});

		_sortingData = sortedProductList;

		document.querySelector('.trigger-filter').click();
	};

	const filterSortedProducts = (item) => {
		const selectType = document.querySelector('.js-select-type-product');

		const inputPriceFirst = parseInt(inputLeft.current.value);
		const inputPriceEnd = parseInt(inputRight.current.value);

		if (parseInt(item.price) > inputPriceEnd || parseInt(item.price) < inputPriceFirst) { return; }
		if (selectType.value === 'Показать всё') { return item; }
		if (selectType.value === 'Стулья' && item.classProduct === 'chair') { return item; }
		if (selectType.value === 'Столы' && item.classProduct === 'table') { return item; }
		if (selectType.value === 'Комплекты' && item.classProduct === 'set') { return item; }
	};

	const removeFilter = ()=> {
		_sortingData = productList;

		setCheckAscendingOrder(false);
		setCheckDescendingOrder(false);

		document.querySelector('.trigger-filter').click();
	};

	const buttonUpReRenderOne = () => {
		setIsMovingLeftButton(false);
		filterTypeFilter();
	};

	const buttonUpReRenderTwo = () => {
		setIsMovingRightButton(false);
		filterTypeFilter();
	};

	const getValueLeft = (e) =>{
		setLeftInputValue(e.target.value);
		setWhereGetValueLeft(false);
	};

	const inputValueLeft = (e) => {
		if (e.key === 'Enter') {

			if (parseInt(inputLeft.current.value) + 1500 < parseInt(inputRight.current.value)) {
				setLeftPointX(Math.abs(leftInputValue / stepMoveCircle));
				setWhereGetValueLeft(true);
				filterTypeFilter();
				return;
			}

			setLeftPointX(-rightPointX);
			setWhereGetValueLeft(true);
			filterTypeFilter();
		}
	};

	const inputValueRight = (e) => {
		if (e.key === 'Enter') {

			if (parseInt(inputRight.current.value) > 13300) { 
				setRightPointX(-222); 
				return; 
			}

			if (parseInt(inputRight.current.value) > parseInt(inputLeft.current.value) + 1500) {
					setRightPointX((-(rightInputValue) / stepMoveCircle+stepMoveCircle));
					setWhereGetValueRight(true);
					filterTypeFilter();
					return;
			}

			setRightPointX(-leftPointX);
			setWhereGetValueRight(true);
			filterTypeFilter();
		}
	};

	const getValueRight = (e) =>{
		setRightInputValue(e.target.value);
		setWhereGetValueRight(false);
	};

	const handleLeftPositionButton = (offsetX) => {
		const { clientWidth } = widthPointRight.current;

		offsetX <= rightPointX - 2 * clientWidth && setLeftPointX(-rightPointX + 1.5 * clientWidth)
		positionButtonOne - clientWidth < clientWidth && setLeftPointX(0);
	
		removeMoveOutLeftButton();
		setLeftPointX(positionButtonOne - clientWidth);
	};

	return (
		<div className="box-filter-products">
			<button 
				className="sort-ascending-order style-button-filter"
				onClick={() => buttonSortAscendingOrder()}
			>
				Сортировка по возрастанию
			</button>
			<button 
				className="sort-descending-order style-button-filter"
				onClick={() => buttonSortDescendingOrder()}
			>
				Сортировка по убыванию
			</button>
			<button className="style-button-filter-dont-active">
				Сортировка по выбраной стоимости
			</button>
			<div className="box-input">
				<input
					ref={inputLeft}
					type="number"
					value={whereGetValueLeft ? leftPointX * stepMoveCircle : leftInputValue}
					onChange={(e) => getValueLeft(e)}
					onKeyDown={(e) => inputValueLeft(e)}
					className="input-price"
				/>
				<input
					ref={inputRight}
					type="number"
					value={whereGetValueRight ?  Math.ceil((-(rightPointX-stepMoveCircle) * stepMoveCircle)) : rightInputValue}
					onChange={(e) => getValueRight(e)}
					onKeyDown={(e) => inputValueRight(e)}
					className="input-price"
				/>
			</div>
			<div className="line-price">
				<div className="into-line-price">
					<div
						ref={lineRef}
						onMouseUp={() => leaveMouse()}
						onMouseDown={(e) => moveClosestButton(e)}
						onMouseMove={(e) => handleLineMoving(e)}
						onMouseLeave={() => leaveMouse()}
						className="true-into-line-price"
					>
						<div
							ref={widthPointLeft}
							onMouseUp={() => buttonUpReRenderOne()}
							onMouseDown={() => setIsMovingLeftButton(true)}
							style={{transform: `translateX(${leftPointX}px)`}}
							className={`first-point-line ${!isMovingLeftButton && fixMoveLeftButton ? 'transition-point' : ''}`}
						/>
						<div
							ref={widthPointRight}
							onMouseUp={() => buttonUpReRenderTwo()}
							onMouseDown={() => setIsMovingRightButton(true)}
							style={{transform: `translateX(${-rightPointX}px)`}}
							className={`end-point-line ${!isMovingRightButton && fixMoveRightButton ? 'transition-point' : ''}`}
						/>
					</div>
				</div>
			</div>
			<select 
				className="js-select-type-product style-button-filter"
				onChange={() => filterTypeFilter()}
			>
				<option>Показать всё</option>
				<option>Стулья</option>
				<option>Столы</option>
				<option>Комплекты</option>
			</select>

			<button 
				className="sort-price-order style-button-filter"
				onClick={() => removeFilter()}
			>
				Очистить фильтры
			</button>
		</div>
	);
};

export default FilterProducts;