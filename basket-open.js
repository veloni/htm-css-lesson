const basketOpen = () => {
	const basketIcon = document.querySelector('.basket-icon');
    
	basketIcon.onclick = function() {
		document.querySelector('.js-trigger-open-basket').click();
	}
}

basketOpen();