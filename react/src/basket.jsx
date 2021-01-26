import React, { useEffect, useState } from 'react';
import FillingBasket from './ fillingBasket';

const Basket = () => {
    const [productArrayState, setProductArrayState] = useState([]);
    const [idArrayState, setIdArrayState] = useState([]);
     //времено тут

    const getItem = () => {
        if (!checkItem()){
            setProductArrayState([
                ...productArrayState,
                {
                    productName,
                    quanityProduct,
                    productPrice,
                    productId,

                },
            ]);  
            setIdArrayState([
                ...idArrayState,
                    productId,
            ]);  
            }
        else {
            test123();
 
        }
    }
   
    const checkItem = () => idArrayState.includes(productId);
    const addQuanity = () => {
        const newProductArray = productArrayState.map((item) => {
            if (item.productId === productId) {
                item.quanityProduct += 1;
                item.productPrice = item.productPrice * 2;
            }
            return item;
        });
        return newProductArray;
    }

    const test123 = () => {
        const newArray = addQuanity();
        setProductArrayState([...newArray]);
    }

    
    
    

    return (
        <div>
            <button
                className="dn js-trigger-charts"
                onClick={() => getItem()}
            />
            <table className="table-basket-border">
                <tr className="table-basket-border table-title">
                    <th className="column-delete "></th>
                    <th className="column-img"></th>
                    <th className="column-name-product">Наименование товара</th>
                    <th className="column-price">Цена за шт.</th>
                    <th className="column-quanity-product">Количество</th>
                    <th className="column-end-price">Цена</th>
                </tr>

                {productArrayState.map((data) => (
                    <FillingBasket
                        data={data}
                    />
                ))}

            </table>
        </div>
    );
};

export default Basket;