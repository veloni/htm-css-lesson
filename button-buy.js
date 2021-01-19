const buyItem = () => {
    const findId = document.querySelectorAll('.find-id');
    const buttonBuy = document.querySelectorAll('.buy-item');

    //console.log(buttonBuy);


    Array.from(buttonBuy).forEach(function(item,index) {
        item.addEventListener('click', function() {
            const productId = findId[index].innerHTML;
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
    productList.forEach(function(item, index) {
        if (item.id === lastItem && itemFind === true){
            productPrice = item.price;
            productName = item.product;
            itemFind = false;
            console.log(productPrice);
        }
        else{
            return;
        }
    });
}