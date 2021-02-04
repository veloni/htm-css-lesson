import React, { useEffect, useState } from 'react';
import FillingBasket from './ fillingBasket';

const Basket = () => {
    const [productArrayState, setProductArrayState] = useState([]);
    const [idArrayState, setIdArrayState] = useState([]);
    
    const getItem = () => {
        if (!checkItem()){
            setProductArrayState([
                ...productArrayState,
                {
                    productName,
                    quanityProduct,
                    productPrice,
                    productId,
                    ordered,
                },
            ]);  
            setIdArrayState([
                ...idArrayState,
                    productId,
            ]);  
            }
        else {
            createNewArray(1);
 
        }
    }


    const pushData = (idState) => {
    
       const newProductArray = productArrayState.map((item) => {
            if (item.productId === idState) {
                item.ordered = false;
            }
            return item;
        });
        setProductArrayState([...newProductArray]);
    }    
   
    const checkItem = () => idArrayState.includes(productId);

    const addQuanity = (sign, idState) => {
        const newProductArray = productArrayState.map((item) => {
            if (item.productId === idState) {
                item.quanityProduct += 1 * sign ;
                if (sign === 1){
                    item.productPrice = parseInt(item.productPrice) + parseInt(item.productPrice)/(item.quanityProduct - 1);
                } else {
                    item.productPrice = parseInt(item.productPrice) - parseInt(item.productPrice)/(item.quanityProduct + 1);
                }
            }
            return item;
        });
        return newProductArray;
    }

    const createNewArray = (sign, idState = productId) => {
        const newArray = addQuanity(sign , idState);
        setProductArrayState([...newArray]);
    }

    const boxOrderOpen = () => {
        const mainBoxOrder = document.querySelector('.order-wrapper');
        mainBoxOrder.style.display = "flex";
        // window.boxOrderRefWindow.current.classList.remove('dn');

        endProductArray = productArrayState;
        document.querySelector('.trigger-fillingOrder').click();
    }    

    const renderBasketItems = () => {
        const myArray = productArrayState.map((data, index) => {
            if (data.ordered) {
                return <FillingBasket
                    data={data}
                    pushData={pushData}
                    createNewArray={createNewArray}
                />
            }
        });
        return myArray;
    }

    return (
        <div>
            <button
                className="js-trigger-charts"
                onClick={() => getItem()}
            />
            <table className="table-basket-border">
                <tr className="table-basket-border table-title">
                    <th className="column-delete ">
                     
                    </th>
                    <th className="column-img"></th>
                    <th className="column-name-product">Наименование товара</th>
                    <th className="column-price">Цена за шт.</th>
                    <th className="column-quanity-product">Количество</th>
                    <th className="column-end-price">Цена</th>
                </tr>

                {renderBasketItems()}

            </table>
            <button className="button-create-order"
                     onClick={() => boxOrderOpen()}>
                Оформить заказ
            </button>
        </div>
    );
};

export default Basket;