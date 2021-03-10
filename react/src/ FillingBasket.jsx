// decompose states and functions to hooks
import React, { useEffect, useState, useRef } from 'react';

const FillingBasket = ({
	data,
	_deleteProduct,
	addQuanityInArray,
}) => {
	const {
		productId,
		_productName,
		_productPrice,
		ordered,
		_pathImage,
		_quanityProduct,
	} = data;

	const productIdRef = useRef(null);

	const [quanityProductState, setQuanityProduct] = useState(1);
	const [endPriceState, setEndPriceState] = useState(_productPrice);
	const [productPriceState, setProductPriceState] = useState(_productPrice);

	useEffect(() => {
		setQuanityProduct(_quanityProduct);
		setEndPriceState(_productPrice);
	});

	const downQunity = () => {
		quanityProductState >= 2 && addQuanityInArray(-1, productId);
	};

	return (
		<tr className="table-basket-border container-product-basket">
			<td>
				<img
					onClick={() => _deleteProduct(productId)}
					className="icon-delete"
					src="./img/icon-delete.svg"
				/>
			</td>
			<td className="box-product-image">
				<div className="wrapper-box-img-basket">
					<img
						className="img-in-basket"
						src={`img/photoBase/${_pathImage}`}
					/>
				</div>
				<span 
					ref={productIdRef} 
					className="idtable dn"
				>
					{productId}
				</span>
			</td>
			<td className="product-name-text">
				{_productName}
				{ordered}
			</td>
			<td className="product-price-text">
				{productPriceState} р
			</td>
			<td className="product-quanity-text">
				<div className="product-quanity-text-content">
					<img
						onClick={() => addQuanityInArray(1, productId)}
						className="arrow-svg"
						src="./img/up-arrow.svg"
					/>
					{quanityProductState}
					<img
						onClick={() => downQunity()}
						className="arrow-svg-down"
						src="./img/up-arrow.svg"
					/>
				</div>
			</td>
			<td className="product-price-text">
				{endPriceState} р
			</td>
		</tr>
	);
};

export default FillingBasket;