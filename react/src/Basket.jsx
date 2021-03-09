// decompose states and functions to hooks
import React, { useEffect, useState } from 'react';

import FillingBasket from './ FillingBasket';
import BoxOrder from './Order';

const Basket = () => {
    const [productArrayState, setProductArrayState] = useState(saveProductArrayState);
    const [idArrayState, setIdArrayState] = useState([]);
    const [orderState, setOrderState] = useState(false);

    useEffect(() => {
        saveProductArrayState = productArrayState;
    });

    useEffect(() => {
        isBasketOpen = true;
        return () => {
            isBasketOpen = false;
        }
    }, []);
    
    const getItem = () => {

        const itemDontBeenDeleteDunction = () => {
            document.querySelector('.trigger-change-text-message').click(); 
            setProductArrayState([
                ...productArrayState,
                {
                    productName,
                    quanityProduct,
                    productPrice,
                    productId,
                    ordered,
                    pathImage,
                },
            ]);
            setIdArrayState([
                ...idArrayState,
                productId, 
            ]);
        }

        const itemBeenDeleteFucntion = () => {
            const newProductArrayDelete = productArrayState.map((item) => {
                const newItem = Object.assign({}, item); 
                
                if (item.productId === productId) {
                    newItem.ordered = true;
                    newItem.productPrice =  newItem.productPrice /  newItem.quanityProduct;
                    newItem.quanityProduct = 1;
                    document.querySelector('.trigger-check-added-item').click(); 
                }
                return newItem;
            });

            setProductArrayState([...newProductArrayDelete]);
        }

        if (itemBeenDelete()){ itemBeenDeleteFucntion(); return; };
        itemDontBeenDeleteDunction();
    }

    const pushData = (idState) => {
       const newProductArray = productArrayState.map((item) => {
            const newItem = Object.assign({}, item);
            if (item.productId === idState) {
                newItem.ordered = false;
            }
            return newItem;
        }); 
        
        setProductArrayState([...newProductArray]);
    };

    const itemBeenDelete = () => idArrayState.includes(productId); 

    const addQuanity = (sign, idState) => {
        const newProductArray = productArrayState.map((item) => {
            if (item.productId === idState) {
                item.quanityProduct += 1 * sign ;

                let calcIfSignOne = parseInt(item.productPrice) + parseInt(item.productPrice)/(item.quanityProduct - 1);
                let calcIfSignMoreOne = parseInt(item.productPrice) - parseInt(item.productPrice)/(item.quanityProduct + 1);

                if (sign === 1){ item.productPrice = calcIfSignOne; } 
                if (sign !== 1) { item.productPrice = calcIfSignMoreOne; } 
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

        document.querySelector('.box-basket').classList.add('overflow-hidden'); 
        document.querySelector('.trigger-message-alert-close').click();

        const clearVariable = () => {
            newFilterArray = [];
            quanityItems = null;
            endPriceForOrder = null;
        }

        clearVariable();

        productArrayState.map((item) => {
            const giveDataOrdered = () => {
                newFilterArray.push(item);
                endPriceForOrder += parseInt(item.productPrice);
            }

            item.ordered !== false && giveDataOrdered();
        });

        quanityItems = newFilterArray.length;
        quanityItems === 0 ? quanityItems = null : ""; 
        setOrderState(true);
    }

    const renderBasketItems = () => {
        const productsDataState = productArrayState.map((data) => { // rework with self-return and ternar if
            if (data.ordered) {
                return <FillingBasket
                    data={data}
                    pushData={pushData}
                    createNewArray={createNewArray}
                />
            }
        });
        return productsDataState; 
    }

    return (
        <div className="box-basket">  
            {orderState && <BoxOrder
                setOrderState={setOrderState}
                productArrayState={newFilterArray}
                quanityItems={quanityItems}
                endPriceForOrder={endPriceForOrder}
                pathImage={pathImage}
            />}
            <button
                className="js-trigger-charts dn"
                onClick={() => getItem()}
            />
            <table className="table-basket-border">
                <tr className="table-basket-border table-title">
                    <th className="column-delete"></th> 
                    <th className="column-img"></th> 
                    <th className="column-name-product">Наименование товара</th>
                    <th className="column-price">Цена за шт.</th>
                    <th className="column-quanity-product">Количество</th>
                    <th className="column-end-price">Цена</th>
                </tr>
                {renderBasketItems()}
            </table>
            <div className="wrapper-button-create-order">
                <button 
                    className="button-create-order"
                    onClick={() => boxOrderOpen()}
                >
                    Оформить заказ
                </button>
            </div>
        </div>
    );
};

export default Basket;