import React, { useState } from 'react';
import Basket from './Basket.jsx';

const renderBasket = () => {
	
	const [openBasketState, setOpenBasketState] = useState(false);
		
	return (
		<div>
			<button 
				className="js-trigger-open-basket dn"
				onClick={() => setOpenBasketState(!openBasketState)}
			/>
			{openBasketState && <Basket/>}
		</div>
	);
};

export default renderBasket;