// decompose states and functions to hooks
import React, { useEffect, useState, useRef } from 'react';

const FillingBasket = ({
    data,
    pushData,
    createNewArray,
}) => {
    const testId = useRef(null);

    const [idState, setIdState] = useState(data.productId);
    const [productNameState, setProductName] = useState(data.productName);
    const [productPriceState, setProductPrice] = useState(data.productPrice);
    const [quanityProductState, setQuanityProduct] = useState(1);
    const [endPriceState, setEndPriceState] = useState(data.productPrice);
    const [orderedState, setOrderedState] = useState(data.ordered);
    const [pathImage, setPathImage] = useState(data.pathImage);

    useEffect(() => {
        setQuanityProduct(data.quanityProduct);
        setEndPriceState(data.productPrice);
    })

    const deleteItem = () => {
        pushData(idState);
    }

    const upQunity = () => {
        createNewArray(1, idState);
    }

    const downQunity = () => {
        quanityProductState >= 2 && createNewArray(-1, idState);
    }

    return (
        <tr className="table-basket-border container-product-basket">
            <td>
                <img
                    onClick={() => deleteItem()}
                    className="icon-delete"
                    src="./img/icon-delete.svg"
                />
             </td>

            <td className="box-product-image">
                <div className="wrapper-box-img-basket">
                    <img
                        className="img-in-basket"
                        src={`img/photoBase/${pathImage}`}
                    /> 
                </div>
                <span ref={testId} className="idtable dn"> 
                    {idState} 
                </span>
            </td>

            <td className="product-name-text"> 
                {productNameState} 
                {orderedState} 
            </td> 
            <td className="product-price-text"> 
                {productPriceState} р
            </td> 
            <td className="product-quanity-text">
                <div className="product-quanity-text-content">
                <img
                    onClick={() => upQunity()}
                    className="arrow-svg"
                    src="./img/up-arrow.svg"
                />
                {quanityProductState}
                <img
                    onClick={() => downQunity()}
                    className="arrow-svg-down"
                    src="./img/up-arrow.svg"
                /></div>
            </td>
            <td className="product-price-text"> 
                {endPriceState} р
            </td> 
        </tr>
    );
};

export default FillingBasket;