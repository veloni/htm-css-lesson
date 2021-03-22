import React, { useEffect, useState, useRef } from 'react';
import CloseOrder from './CloseOrder.jsx';

const BoxOrder = ({
	productArrayState,
	setOrderState,
	_quanityItems,
	_endPriceForOrder,
}) => {
	const boxOrderRef = useRef(null);
	const selectRef = useRef(null);
	const inputPromo = useRef(null);
	const closeOrderRef = useRef(null);

	const [endPriceState, setEndPriceState] = useState(_saveDiscount ? _endPriceForOrder : _endPriceForOrder * 0.9);

	const [phoneUser, setPhoneUser] = useState(_savePhoneUser);
	const [nameUser, setNameUser] = useState(_saveNameUser);
	const [adressUser, setAdressUser] = useState(_saveAdressUser);
	const [emailUser, setEmailUser] = useState(_saveEmailUsers);
	const [paymentMethod, setPaymentMethod] = useState(_savePaymentMethod);
	const [commitOrder, setCommitOrder] = useState(_saveCommitOrder);

	const [phoneUserCorrect, setPhoneUserCorrect] = useState(true);
	const [nameUserCorrect, setNameUserCorrect] = useState(true);
	const [emailUserCorrect, setEmailUserCorrect] = useState(true);
	const [warningMessage, setWarningMessage] = useState([]);

	const [seeCloseOrder, setSeeCloseOrder] = useState(false);
	const [discountGive, setDiscountGive] = useState(_saveDiscount);

 	useEffect(() => {
	 	_saveEmailUsers = emailUser;
		_savePhoneUser = phoneUser;
		_saveNameUser = nameUser;
		_saveAdressUser = adressUser;
		_savePaymentMethod = paymentMethod;
		_saveCommitOrder = commitOrder;
		_saveDiscount = discountGive;  
	}); 
		
	useEffect(() => {
		window.addEventListener('keydown', close);
		return () => window.removeEventListener('keydown', close);
	}, [])

	const inputGiveDiscount= (e) => {
		if (
			e.key === 'Enter' && 
			inputPromo.current.value === 'discount' &&
			discountGive && 
			_quanityItems !== null
		)	{
			setEndPriceState(endPriceState * 0.9);
			setDiscountGive(false);
			alert('Ваша скидка 10 процентов');
		}
	};

	const checkCorrectValue = () => {
		if (researchMessage()) { return; };

		setSeeCloseOrder(true);
	};

	const closeOrder = () => {
		setOrderState(false);
		document.querySelector('.box-basket').classList.remove('overflow-hidden');
		document.querySelector('.js-trigger-message-alert-hide').click();
	};

	const close = (e) => {
		if (e.keyCode !== 27) { return; };
		closeOrder();
	};

	const researchMessage = () => {
		const phoneRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
		const emailRegular = /^\S+@\S+$/;
		const nameRegular = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;

		const phoneWarning = !phoneRegular.test(phoneUser) ? 'Телефон не верен' : '';
		const emailWarning = !emailRegular.test(emailUser) ? 'Email не верен' : '';
		const nameUserWarning = !nameRegular.test(nameUser) ? 'ФИО не верно' : '';
		const quanityWarning = _quanityItems === null ? 'Ничего не добавлено' : '';

		setPhoneUserCorrect(phoneRegular.test(phoneUser));
		setEmailUserCorrect(emailRegular.test(emailUser));
		setNameUserCorrect(nameRegular.test(nameUser));
	
		const arrayMessageOne = [phoneWarning, emailWarning, nameUserWarning, quanityWarning];
		let arrayMessage = [];

		arrayMessage = arrayMessageOne.filter(element => element !== '');

		const arrayMessageСommas = arrayMessage.map((item, index) => {
			if (item === '') { return; } 

			if (index + 1 === arrayMessage.length) {
				return `${item}!`;
			}

			if (index + 1 < arrayMessage.length) {
				return `${item}, `;
			}

			return item;
		});
		
		setWarningMessage(arrayMessageСommas);

		return !!arrayMessageСommas.length;
	};

	return (
		<div>
			{seeCloseOrder && <CloseOrder
				phoneUser={phoneUser}
				nameUser={nameUser}
				adressUser={adressUser}
				emailUser={emailUser}
				endPriceState={endPriceState}
				_quanityItems={_quanityItems}
				paymentMethod={paymentMethod}
			/>}
			<div className="order-wrapper">
				<button
					className="dn trigger-close-last-order"
					onClick={() => setSeeCloseOrder(!seeCloseOrder)}
				/>
				<button
					className="dn trigger-fillingOrder"
					onClick={() => giveDataOrder()}
				/>
				<div ref={boxOrderRef} className="container-order">
					<div className="box-order">
						<div className="wrapper-order-title">
							<span className="text-order-title">
								Оформление заказа
							</span>
							<div
								className="close-order"
								onClick={() => closeOrder()}
							>
								Закрыть
							</div>
						</div>
						<div className="container-main-order">
							<div className="container-busket-order container-busket-order-for-table-items">
								<div className="wrapper-text-order-title-items">
									<span className="text-order-title-items">
										Ваш заказ
									</span>
								</div>
								<table className="table-basket-border-order-main">
									<thead>
										<tr className="table-basket-border-order">
											<th className="column-id-order">Артикул</th>
											<th className="column-img-order">Картинка</th>
											<th className="column-name-product-order">Наименование товара</th>
											<th className="column-price-order">Цена за шт.</th>
											<th className="column-quanity-product-order">Кол.</th>
											<th className="column-end-price-order">Цена</th>
										</tr>
									</thead>
									<tbody>
										{productArrayState.map((item, index) => (
											<tr 
												className="table-basket-border-order container-product-basket-order"
												key={index}
											>
												<td>
													<span className="idtable-order">
														{item.productId}
													</span>
												</td>
												<td>
													<div className="wrapper-box-img-order">
														<img
															className="img-order"
															src={`img/photoBase/${item._pathImage}`}
														/>
													</div>
												</td>
												<td className="product-name-text-order">
													<span>
														{item._productName}
													</span>
												</td>
												<td className="product-price-text-order">
													<span>
														{item._productPrice / item._quanityProduct} р
													</span>
												</td>
												<td className="product-quanity-text-order">
													<span>
														{item._quanityProduct}
													</span>
												</td>
												<td className="product-price-text-order">
													<span>
														{item._productPrice} р
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="container-details-order">
								<div className="wrapper-text-order-title-items">
									<span className="text-order-title">
										Детали заказа
									</span>
									<span className="warning-mesage-text">
										{warningMessage}
									</span>
								</div>
								<div className="grid">
									<div className="order-phone"> 
										Телефон
										{!phoneUserCorrect && <span className="incorect-value">*</span>}
									</div>
									<input
										defaultValue={phoneUser}
										onChange={(e) => setPhoneUser(e.target.value)}
										type="number"
										className="input-phone"
									/>
									<div> 
										Населенный пункт
									</div>
									<input 
										type="text" 
										defaultValue={adressUser}
										onChange={(e) => setAdressUser(e.target.value)}
										className="input-phone"
									/>
									<div> 
										ФИО
										{!nameUserCorrect && <span className="incorect-value">*</span>}
									</div>
									<input 
										type="text" 
										defaultValue={nameUser}
										onChange={(e) => setNameUser(e.target.value)}
										className="input-phone"
									/>
									<div>
										Электронная почта
										{!emailUserCorrect && <span className="incorect-value">*</span>}
									</div>
									<input type="text"
										defaultValue={emailUser}
										onChange={(e) => setEmailUser(e.target.value)}
										className="input-phone"
									/>
									<div>Комментарий</div>
									<textarea
										defaultValue={_saveCommitOrder}
										className="input-comment"
										onChange={(e) => setCommitOrder(e.target.value)}>
									</textarea>
								</div>
								<div className="bottom-order">
									<div className="wrapper-title-bottom-order title-bottom-order">
										<span className={_quanityItems || "if-dont-have-items-ins-busket"}>
											{_quanityItems && 
											`Итого: ${_quanityItems} товаров на сумму ${endPriceState} р`}
										</span>
									</div>
									<div className="wrapper-payment-bottom-order">
										<div className="wrapper-payment-bottom-order-two">
											<div className="wrapper-promo-code">
												<span className="text-bottom-order">Ввод промокода:</span>
												<input
													defaultValue="discount"
													ref={inputPromo}
													className="input-promo"
													onKeyDown={(e) => inputGiveDiscount(e)}
												>
												</input>
											</div>
											<div className="wraper-payment">
												<span className="text-bottom-order">Выберите способ оплаты:</span>
												<select
													defaultValue={_savePaymentMethod}
													ref={selectRef}
													className="select-payment-method"
													onClick={() => setPaymentMethod(selectRef.current.value)}
												>
													<option>
														При получении
													</option>
													<option>
														Онлайн
													</option>
												</select>
											</div>
										</div>
									</div>
									<div className="wrapper-payment-bottom-order-two-section">
										<span className="text-doc">
											Нажимая на кнопку оформить заказ вы принимаете условие публичной оферты.
										</span>
										<button
											ref={closeOrderRef}
											className="button-close-order"
											onClick={() => checkCorrectValue()}
										>
											Оформление заказа
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxOrder;

