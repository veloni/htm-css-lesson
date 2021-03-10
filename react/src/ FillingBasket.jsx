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

	const [_quanityProductState, set_quanityProduct] = useState(1);
	const [_endPriceState, set_endPriceState] = useState(_productPrice);
	const [_productPriceState, set_productPriceState] = useState(_productPrice);

	useEffect(() => {
		set_quanityProduct(_quanityProduct);
		set_endPriceState(_productPrice);
	});

	const downQunity = () => {
		_quanityProductState >= 2 && addQuanityInArray(-1, productId);
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
				{_productPriceState} р
			</td>
			<td className="product-quanity-text">
				<div className="product-quanity-text-content">
					<img
						onClick={() => addQuanityInArray(1, productId)}
						className="arrow-svg"
						src="./img/up-arrow.svg"
					/>
					{_quanityProductState}
					<img
						onClick={() => downQunity()}
						className="arrow-svg-down"
						src="./img/up-arrow.svg"
					/>
				</div>
			</td>
			<td className="product-price-text">
				{_endPriceState} р
			</td>
		</tr>
	);
};

export default FillingBasket;