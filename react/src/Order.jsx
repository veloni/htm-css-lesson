import React, { useEffect, useState, useRef } from 'react';
import CloseOrder from './CloseOrder.jsx';

const BoxOrder = ({
	productArrayState,
	setOrderState,
	quanityItems,
	endPriceForOrder,
}) => {
	const boxOrderRef = useRef(null);
	const selectRef = useRef(null);
	const inputPromo = useRef(null);

	const [endPriceState, setEndPriceState] = useState(saveDiscount ? endPriceForOrder : endPriceForOrder * 0.9);

	const [phoneUser, setPhoneUser] = useState(savePhoneUser);
	const [nameUser, setNameUser] = useState(saveNameUser);
	const [adressUser, setAdressUser] = useState(saveAdressUser);
	const [emailUser, setEmailUser] = useState(saveEmailUsers);
	const [paymentMethod, setPaymentMethod] = useState(savePaymentMethod);
	const [commitOrder, setCommitOrder] = useState(saveCommitOrder);

	const [phoneUserCorrect, setPhoneUserCorrect] = useState(true);
	const [nameUserCorrect, setNameUserCorrect] = useState(true);
	const [emailUserCorrect, setEmailUserCorrect] = useState(true);
	const [warningMessage, setWarningMessage] = useState(null);

	const [seeCloseOrder, setSeeCloseOrder] = useState(false);
	const [discountGive, setDiscountGive] = useState(saveDiscount);

 	useEffect(() => {
		saveEmailUsers = emailUser;
		savePhoneUser = phoneUser;
		saveNameUser = nameUser;
		saveAdressUser = adressUser;
		savePaymentMethod = paymentMethod;
		saveCommitOrder = commitOrder;
		saveDiscount = discountGive;
		researchMessage();
	}); 

	const inputGiveDiscount= (e) => {
		if (
			e.key === 'Enter' && 
			inputPromo.current.value === 'discount' &&
			discountGive && 
			quanityItems !== null
		)	{
			setEndPriceState(endPriceState * 0.9);
			setDiscountGive(false);
			alert('Ваша скидка 10 процентов');
		}
	}

	const checkCorrectValue = () => {
		checkAllRegular();
	}

	const closeOrder = () => {
		setOrderState(false);
		document.querySelector('.box-basket').classList.remove('overflow-hidden');
		document.querySelector('.js-trigger-message-alert-hide').click();
	}

	const close = (e) => {
		if (e.keyCode !== 27) { return; };
		closeOrder();
	}

	const checkAllRegular = () => {
		if (!firstRenderOrder) {firstRenderOrder = true;}
		const phoneRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
		const emailRegular = /^\S+@\S+$/;
		const nameRegular = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
		setPhoneUserCorrect(phoneRegular.test(phoneUser));
		setEmailUserCorrect(emailRegular.test(emailUser));
		setNameUserCorrect(nameRegular.test(nameUser));
	}

	const researchMessage = () => {
		const phoneWarning = !phoneUserCorrect ? 'Телефон не верен' : '';
		const emailWarning = !emailUserCorrect ? 'Email не верен' : '';
		const nameUserWarning = !nameUserCorrect ? 'ФИО не верно' : '';
		const quanityWarning = quanityItems === null ? 'Ничего не добавлено' : '';
		
		let messageFromArray = '';
		let arrayMessage = [];
		let arrayMessageСommas = [];

		if (firstRenderOrder){
			arrayMessageСommas = [];
			arrayMessage = [];
			arrayMessage.push(phoneWarning, emailWarning, nameUserWarning, quanityWarning);

			arrayMessage.map(function(item, index) {
		
				if (item === ''){
					return;
				} 

				arrayMessageСommas.push(item);
		
				if (index + 1 === arrayMessage.length){
					arrayMessageСommas.push('!');
					return;
				}
				if (item !== 0) arrayMessageСommas.push(', ');
				
			});

			arrayMessageСommas.forEach(function(item, index) {
				messageFromArray += item;
			});

		}
	
		setWarningMessage(messageFromArray);
	}

	useEffect(() => {
		window.addEventListener('keydown', close);
		return () => window.removeEventListener('keydown', close);
	}, [])

	return (
		<div>
			{seeCloseOrder && <CloseOrder
				phoneUser={phoneUser}
				nameUser={nameUser}
				adressUser={adressUser}
				emailUser={emailUser}
				endPriceState={endPriceState}
				quanityItems={quanityItems}
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
						<div className="container-busket-order">
							<div className="wrapper-text-order-title-items">
								<span className="text-order-title-items">
									Ваш заказ
								</span>
							</div>

							<table className="table-basket-border-order-main">
								<tr className="table-basket-border-order">
									<th className="column-id-order"> Артикул </th>
									<th className="column-img-order"> Картинка </th>
									<th className="column-name-product-order">Наименование товара</th>
									<th className="column-price-order">Цена за шт.</th>
									<th className="column-quanity-product-order">Кол.</th>
									<th className="column-end-price-order">Цена</th>
								</tr>

								{productArrayState.map((item) => (
									<tr className="table-basket-border-order container-product-basket-order">
										<td>
											<span className="idtable-order">
												{item.productId}
											</span>
										</td>

										<td>
											<div className="wrapper-box-img-order">
												<img
													className="img-order"
													src={`img/photoBase/${item.pathImage}`}>
												</img>
											</div>
										</td>

										<td className="product-name-text-order">
											<span>
												{item.productName}
											</span>
										</td>
										<td className="product-price-text-order">
											<span>
												{item.productPrice / item.quanityProduct} р
											</span>
										</td>
										<td className="product-quanity-text-order">
											<span>
												{item.quanityProduct}
											</span>
										</td>
										<td className="product-price-text-order">
											<span>
												{item.productPrice} р
											</span>
										</td>
									</tr>
								))}
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

								<div className="order-phone">  Телефон
									<span className={!phoneUserCorrect ? "incorect-value" : "dn"}>
											*
									</span>
								</div>
								<input
									defaultValue = {phoneUser}
									onChange={(e) => setPhoneUser(e.target.value)}
									type="number"
									maxlength="11"
									className={!phoneUserCorrect ? "incorect-value" : "input-phone"}
								/>
								<div> Населенный пункт

								</div>
								<input type="text" className=""
									defaultValue = {adressUser}
									onChange={(e) => setAdressUser(e.target.value)}
									className="input-phone"
								/>

								<div> Имя
									<span className={!nameUserCorrect ? "incorect-value" : "dn"}>
											*
									</span>
								</div>
								<input type="text" className=""
									defaultValue = {nameUser}
									onChange={(e) => setNameUser(e.target.value)}
									className={!nameUserCorrect ? "incorect-value" : "input-phone"}
								/>

								<div>
									Электронная почта
									<span className={!emailUserCorrect ? "incorect-value" : "dn"}>
										*
									</span>
								</div>
								<input type="text" className=""
									defaultValue = {emailUser}
									onChange={(e) => setEmailUser(e.target.value)}
									className={!emailUserCorrect ? "incorect-value" : "input-phone"}
								/>

								<div> Комментарий </div>

								<textarea
									defaultValue={saveCommitOrder}
									className="input-comment"
									onChange={(e) => setCommitOrder(e.target.value)}>
								</textarea>

							</div>

							<div className="bottom-order">
								<div className="wrapper-title-bottom-order title-bottom-order">
									<span className={quanityItems || "if-dont-have-items-ins-busket"}>
										{quanityItems && `Итого: ${quanityItems}
										товаров на сумму  ${endPriceState} р`}
									</span>
								</div>

								<div className="wrapper-payment-bottom-order">

									<div className="wrapper-payment-bottom-order-two">
										<div className="wrapper-promo-code">
											<span className="text-bottom-order"> Ввод промокода: </span>
											<input
												defaultValue="discount"
												ref={inputPromo}
												className="input-promo"
												onKeyDown={(e) => inputGiveDiscount(e)}
											>
											</input>
										</div>
										<div className="wraper-payment">
											<span className="text-bottom-order"> Выберите способ оплаты: </span>
											<select
											defaultValue={savePaymentMethod}
												ref={selectRef}
												className="select-payment-method"
												onClick={(e) => setPaymentMethod(selectRef.current.value)}>
												<option className="">
													При получении
													</option>

												<option className="">
													Онлайн</option>
											</select>

										</div>

										{/*  <div className="wrapper-details-order">
											<span className="text-bottom-order"> Детали заказа: </span>

										</div> */}
									</div>
								</div>
								<div className="wrapper-payment-bottom-order-two-section">
									<span className="text-doc">
										Нажимая на кнопку оформить заказ вы принимаете условие публичной оферты.
									</span>
									<button className="button-close-order"
										onClick={(e) => checkCorrectValue()}
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

