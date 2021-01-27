
import React, { useEffect, useState, useRef } from 'react';

const FillingBasket = (
    {data}, 
) => {

    let testId = useRef(null);

    const [idState, setIdState] = useState(data.productId);
    const [productNameState, setProductName] = useState(data.productName);
    const [productPriceState, setProductPrice] = useState(data.productPrice);
    const [quanityProductState, setQuanityProduct] = useState(1);
    const [endPriceState, setEndPriceState] = useState(data.productPrice);

    useEffect(() => {
        setQuanityProduct(data.quanityProduct);
        setEndPriceState(data.productPrice);
      })

    return (

        <tr className="table-basket-border container-product-basket">
            <td> </td>
            <td> <span ref={testId} className="idtable dn"> {idState} </span></td>
            <td className="product-name-text"> {productNameState} </td>
            <td className="product-price-text"> {productPriceState + " р"} </td>
            <td className="product-quanity-text"> {quanityProductState} </td>
            <td className="product-price-text"> {endPriceState + " р"} </td>
        </tr>

    );
};

export default FillingBasket;

