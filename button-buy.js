const buyItem = () => {
	const findId = document.querySelectorAll('.find-id');
	const buttonBuy = document.querySelectorAll('.buy-item');

	Array.from(buttonBuy).forEach(function(item, index) {
		item.addEventListener('click', function() {
			document.querySelector('.js-trigger-item-added').click();
			 
			const productId = findId[index].innerHTML;
			_idDataBuyItem.push(productId);
			let checkAddItems = false;

			findProduct();

			if (_isBasketOpen) {
				document.querySelector('.js-trigger-charts').click();
			} else { 
				
			_saveProductArrayState.map((product) => {
					if (product.productId === productId) {
						if (product.ordered === true) {
							checkAddItems !== checkAddItems;   
							document.querySelector('.js-trigger-item-dont-added').click();    
							return;
						}
					}
				});  

				if (!checkAddItems) {
					let itemAdded = false;

					_saveProductArrayState.forEach(function(item) {
						if (productId === item.productId && item.ordered) {
							itemAdded = true;
						}
					});

					if (itemAdded === false) {
						_saveProductArrayState.push({
							_productName,
							_quanityProduct,
							_productPrice,
							productId,
							ordered,
							_pathImage,
						});
					}
				}
				
			}
		});
	});
}

buyItem();

const findProduct = () => {
	const lastItem = _idDataBuyItem[_idDataBuyItem.length - 1];
	let _itemFind = true;
	
	productList.forEach(function(item) {
		if (item.id === lastItem && _itemFind === true) {
			_productPrice = item.price;
			_productName = item.product;
			_itemFind = false;
			productId = item.id;
			ordered = true;
			_pathImage = item.img
		} else {
		return;
	}
	});
}

