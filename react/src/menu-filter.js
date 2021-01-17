const sortAscendingOrder = () => {
    const buttonSortAscendingOrder = document.querySelector('.sort-ascending-order');
    const buttonSortDescendingOrder = document.querySelector('.sort-descending-order');
    const buttonSortPriceOrder = document.querySelector('.sort-price-order');
  
    const renderPriceSort = () =>{
        const allProducts = document.querySelectorAll('.box-products > *');
        const allProductsPrice = document.querySelectorAll('.box-products > * >.product-price');
        const inputPriceFirst = document.querySelector('.js-input-price-first');
        const inputPriceEnd = document.querySelector('.js-input-price-end');

        allProductsPrice.forEach(function(item, index) {

            allProducts[index].classList.remove('dn');

            let valuePriceProduct = parseInt(item.innerHTML.replace(/\D/g,''));
            let inputValueFirst = parseInt(inputPriceFirst.value);
            let inputValueEnd = parseInt(inputPriceEnd.value);

            if (valuePriceProduct < inputValueFirst )
            {
                allProducts[index].classList.add('dn');
            }
            if (valuePriceProduct > inputValueEnd)
            {
                allProducts[index].classList.add('dn');
            }
        });
    }

    const renderTypeSort = () =>{

        const allProducts = document.querySelectorAll('.box-products > *');
        const selectType = document.querySelector('.js-select-type-product');
        selectType.onclick = function(){
       
            switch (selectType.value) {
                case "Стулья":
                    allProducts.forEach(function(item, index) {
                        item.classList.remove('dn');
                       if (!item.classList.contains("chair")){
                            item.classList.add('dn');
                       }
                    });

                  break;
                case "Столы":
                    allProducts.forEach(function(item, index) {
                        item.classList.remove('dn');
                        if (!item.classList.contains("table")){
                             item.classList.add('dn');
                        }
                       
                     });

                  break;
                case "Комплекты":
                    allProducts.forEach(function(item, index) {
                        item.classList.remove('dn');
                        if (!item.classList.contains("set")){
                             item.classList.add('dn');
                        }
                     });
              
                  break;
              }
        }
    }


    buttonSortAscendingOrder.onclick = function(){
    
        let sortingOrder = productList;
        let sorting = sortingOrder.id;
    
       sorting.sort(function(a,b) {
            let x = parseInt(a.price.replace(/\D/g,''));
            let y = parseInt(b.price.replace(/\D/g,''));
            return x < y ? -1 : x > y ? 1 : 0;
        });  
    
        testData = sorting;
        testData = Object.assign({}, [testData]); 
        
        window.ReRender();
        renderTypeSort();
        renderPriceSort();

    }

    buttonSortDescendingOrder.onclick = function(){

        let sortingOrderDescending = productList;
        let sortingDescending = sortingOrderDescending.id;

        sortingDescending.sort(function(a,b) {
            let x1 = parseInt(a.price.replace(/\D/g,''));
            let y1 = parseInt(b.price.replace(/\D/g,''));
            return x1 > y1 ? -1 : x1 < y1 ? 0 : 1;
        }); 
    
        tesDataDescending = sortingDescending;
        tesDataDescending = Object.assign({}, [tesDataDescending]);
        window.renderDataDescending();
        renderTypeSort();
        renderPriceSort();
        }

    buttonSortPriceOrder.onclick = function(){
        renderPriceSort();
        renderTypeSort();
    }

    const filterTypeProduct = () =>{
        renderTypeSort();
        renderTypeSort();
    }

    
    filterTypeProduct();

}

sortAscendingOrder();

