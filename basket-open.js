const displayNoneBasket = () => {
    const basket = document.querySelector('.box-basket');
    basket.classList.add('dn');
}
const displayNoneRemoveBasket = () => {
    const basket = document.querySelector('.box-basket');
    basket.classList.remove('dn');
}

//displayNoneBasket();

const basketOpen = () => {
    const basketIcon = document.querySelector('.basket-icon');
    const basket = document.querySelector('.box-basket');
    basketIcon.onclick = function(){
        if (basket.classList.contains('dn')){
            displayNoneRemoveBasket();
        }
        else {
            displayNoneBasket();
        }
    }
}

basketOpen();


