const buyItem = () => {
    const buttonBuy = document.querySelectorAll('.buy-item');

    Array.from(buttonBuy).forEach(function(item,index) {
        item.addEventListener('click', function() {
            const productId = item.className.replace(/\D/g,'');
            idDataBuyItem.push(productId);
            findProduct();
            document.querySelector('.js-trigger-charts').click();
        });
    });
}

buyItem();

const findProduct = () => {
    const lastItem = idDataBuyItem[idDataBuyItem.length - 1];
    let itemFind = true;
    productList.id.forEach(function(item, index) {
        if (item.id === lastItem && itemFind === true){
            productPrice = item.price;
            productName = item.product;
            itemFind = false;
        }
        else{
            return;
        }
    });
}