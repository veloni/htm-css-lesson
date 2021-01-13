
import React, { useEffect, useState } from 'react';


const FillingBasket = (
    data, 
) => {
   
    const dataName = Object.values(productName);
    const dataPrice = Object.values(productPrice).join('');

    const [productNameState, setProductName] = useState(dataName);
    const [productPriceState, setProductPrice] = useState(dataPrice);
    const [quanityProductState, setQuanityProduct] = useState(1);
    const [endPriceState, setEndPriceState] = useState(dataPrice.replace(/\D/g,''));

    return (

        <tr className="table-basket-border container-product-basket">
            <td> </td>
            <td> </td>
            <td className="product-name-text"> {productNameState} </td>
            <td className="product-price-text"> {productPriceState} </td>
            <td className="product-quanity-text"> {quanityProductState} </td>
            <td className="product-price-text"> {endPriceState + " р"} </td>
        </tr>

    );
};


export default FillingBasket;

