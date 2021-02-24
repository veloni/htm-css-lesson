const buyItem = () => {
    const findId = document.querySelectorAll('.find-id');
    const buttonBuy = document.querySelectorAll('.buy-item');

    Array.from(buttonBuy).forEach(function(item, index) {
        item.addEventListener('click', function() {
            const productId = findId[index].innerHTML;
            idDataBuyItem.push(productId);
            let checkAddItems = false;
            findProduct();
            if (isBasketOpen){
                document.querySelector('.js-trigger-charts').click();
            } else{

            saveProductArrayState.forEach((product) => {
            if (product.productId === productId){
                console.log(product.ordered);
                if (product.ordered === true){
                    checkAddItems =! checkAddItems;
                    return;
                }
            }
            });  
              
             if (!checkAddItems) {
                saveProductArrayState.push({
                    productName,
                    quanityProduct,
                    productPrice,
                    productId,
                    ordered,
                    pathImage,
                });
            }
            }
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
            pathImage = item.img

        } else {
            return;
        }
    });
}

