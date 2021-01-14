const sortAscendingOrder = () => {
    const buttonSortAscendingOrder = document.querySelector('.sort-ascending-order')

    let sortingOrder = productList;
    let sorting = sortingOrder.id;
      
    sorting.sort(function(a,b) {
        let x = parseInt(a.price.replace(/\D/g,''));
        let y = parseInt(b.price.replace(/\D/g,''));
        return x < y ? -1 : x > y ? 1 : 0;
    });
    
    testData = sorting;


    buttonSortAscendingOrder.onclick = function(){
        window.ReRender();
    }
  
}

sortAscendingOrder();

