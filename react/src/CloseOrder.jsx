import React from 'react';

const CloseOrder = ({
	phoneUser,
	nameUser,
	adressUser,
	emailUser,
	endPriceState,
	paymentMethod,
}) => {
	const closeLastOrder = () => {
		document.querySelector('.close-order').click();
		document.querySelector('.trigger-close-last-order').click();
	}

	return (
		<div className="box-close-order">	
			<div className="container-close-order">
				<div className="wrapper-close-order">
					<div className="title-close-order">
						Поздравляем {nameUser} ваш заказ оформлен
					</div>
					<div className="wrapper-ul-data">
						<ul className="ul-data">
							<li>Ваш телефон: {phoneUser}</li>
							<li>Ваше ФИО: {nameUser}</li>
							<li>Ваш адресс: {adressUser}</li>
							<li>Ваша почта: {emailUser}</li>
							<li>Способ оплаты: {paymentMethod}</li>
							<li>Сумма к оплате: {endPriceState} р</li>
						</ul>
					</div>
					<button
						className="close-order-close"
						onClick={() => closeLastOrder()}
					>
						Закрыть
					</button>
				</div>
			</div>
		</div>
	);
};

export default CloseOrder;