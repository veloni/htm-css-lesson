const buyItem = () => {
    const findId = document.querySelectorAll('.find-id');
    const buttonBuy = document.querySelectorAll('.buy-item');


    Array.from(buttonBuy).forEach(function(item, index) {
        item.addEventListener('click', function() {
            const productId = findId[index].innerHTML;
            idDataBuyItem.push(productId);
            findProduct();
            document.querySelector('.js-trigger-open-basket-for-button').click();
            document.querySelector('.js-trigger-charts').click();
            document.querySelector('.js-trigger-close-basket-for-button').click();
        });
    });
}

buyItem();

const findProduct = () => {
    const lastItem = idDataBuyItem[idDataBuyItem.length - 1];
    let itemFind = true;
    productList.forEach(function(item, index) {

        if (item.id === lastItem && itemFind === true) {
            productPrice = item.price;
            productName = item.product;
            itemFind = false;
            productId = item.id;
            ordered = true;
        } else {
            return;
        }
    });
}