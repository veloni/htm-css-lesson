import React, { useEffect, useState } from 'react';

import FillingBasket from './ FillingBasket';
import BoxOrder from './BoxOrder';

const Basket = () => {
	const [productArrayState, setProductArrayState] = useState(_saveProductArrayState);
	const [idArrayState, setIdArrayState] = useState([]);
	const [orderState, setOrderState] = useState(false);

	useEffect(() => {
		_saveProductArrayState = productArrayState;
	});

	useEffect(() => {
		_isBasketOpen = true;
		return () => {
			_isBasketOpen = false;
		}
	}, []);

	const itemDontBeenDeleteFunction = () => {
		setProductArrayState([
			...productArrayState,
			{
				_productName,
				_quanityProduct,
				_productPrice,
				productId,
				ordered,
				_pathImage,
			},
		]);

		setIdArrayState([
			...idArrayState,
			productId,
		]);
	};

	const itemBeenDeleteFucntion = () => {
		const newProductArrayDelete = productArrayState.map((item) => {
			const newItem = Object.assign({}, item);

			if (item.productId === productId) {
				document.querySelector('.js-trigger-item-dont-added').click();
				newItem.ordered = true;
				newItem._productPrice = newItem._productPrice / newItem._quanityProduct;
				newItem._quanityProduct = 1;
			}

			return newItem;
		});

		setProductArrayState([...newProductArrayDelete]);
	};

	const getItem = () => {
		if (itemBeenDelete()) {
			itemBeenDeleteFucntion();
			return;
		};

		let itemAddedInBusket;

		productArrayState.map((item) => {
			if (parseInt(productId) === parseInt(item.productId)){
				itemAddedInBusket = true;
			}
		});

		if (itemAddedInBusket) { return; }

		itemDontBeenDeleteFunction();
	};

	const _deleteProduct = (idState) => {
	  const newProductArray = productArrayState.map((item) => {
			const newItem = Object.assign({}, item);

			if (item.productId === idState) {
				newItem.ordered = false;
			}

			return newItem;
		});

		setProductArrayState([...newProductArray]);
	};

	const itemBeenDelete = () => idArrayState.includes(productId);

	const addQuanity = (sign, idState) => {
		const newProductArray = productArrayState.map((item) => {
			if (item.productId !== idState) { return item; }

			item._quanityProduct += 1 * sign;

			const calcIfSignOne = parseInt(item._productPrice) + parseInt(item._productPrice) / (item._quanityProduct - 1);
			const calcIfSignMoreOne = parseInt(item._productPrice) - parseInt(item._productPrice) / (item._quanityProduct + 1);

			item._productPrice = sign === 1 ? calcIfSignOne : calcIfSignMoreOne;

			return item;
		});

		return newProductArray;
	};

	const addQuanityInArray = (sign, idState = productId) => {
		const newArray = addQuanity(sign, idState);

		setProductArrayState([...newArray]);
	};

	const boxOrderOpen = () => {
		document.querySelector('.box-basket').classList.add('overflow-hidden');
		document.querySelector('.js-trigger-message-alert-hide').click();
		clearVariable();

		productArrayState.map((item) => {
			item.ordered && giveDataOrdered(item);
		});

		_quanityItems = _newFilterArray.length;
		_quanityItems === 0 ? _quanityItems = null : '';

		setOrderState(true);
	};

	const renderBasketItems = () => {
		const productsDataState = productArrayState.map((data, index) => (
			data.ordered) && <FillingBasket
				key={index}
				data={data}
				_deleteProduct={_deleteProduct}
				addQuanityInArray={addQuanityInArray}
			/>
		);

		return productsDataState;
	};

	const giveDataOrdered = (item) => {
		_newFilterArray.push(item);
		_endPriceForOrder += parseInt(item._productPrice);
	};

	const clearVariable = () => {
		_newFilterArray = [];
		_quanityItems = null;
		_endPriceForOrder = null;
	};

	return (
		<div className="box-basket">
			{orderState && <BoxOrder
				setOrderState={setOrderState}
				productArrayState={_newFilterArray}
				_quanityItems={_quanityItems}
				_endPriceForOrder={_endPriceForOrder}
				_pathImage={_pathImage}
			/>}
			<button
				className="js-trigger-charts dn"
				onClick={() => getItem()}
			/>
			<table className="table-basket-border">	
				<thead>
					<tr className="table-basket-border table-title">
						<th className="column-delete"></th>
						<th className="column-img"></th>
						<th className="column-name-product">Наименование товара</th>
						<th className="column-price">Цена за шт.</th>
						<th className="column-quanity-product">Количество</th>
						<th className="column-end-price">Цена</th>
					</tr>
				</thead>
				<tbody>{renderBasketItems()}</tbody>
			</table>
			<div className="wrapper-button-create-order">
				<button
					className="button-create-order"
					onClick={() => boxOrderOpen()}
				>
					Оформить заказ
				</button>
			</div>
		</div>
	);
};

export default Basket;