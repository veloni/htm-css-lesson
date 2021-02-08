import React, { useEffect, useState, useRef } from 'react';

const BoxOrder = () => {
    const boxOrderRef = useRef(null);
    window.boxOrderRefWindow = boxOrderRef;

    const [orderArrayState, setOrderArrayState] = useState(null);
    let [endPriceState, setEndPriceSate] = useState(0);
    let [quanityItemsEnd, setQuanityItemsEnd] = useState(1);

    const giveDataOrder = () => {

        const newProductArray = endProductArray.map((item) => {
            setEndPriceSate(endPriceState += item.productPrice * item.quanityProduct);
            setQuanityItemsEnd(quanityItemsEnd++);
            return item;
        });
        setOrderArrayState([...newProductArray]);


    }


    /*     useEffect(() => {
            console.log(orderArrayState);
        }); */



    return (
        <div>
            <button
                className="dn trigger-fillingOrder"
                onClick={() => giveDataOrder()}
            />

            {orderArrayState && <div ref={boxOrderRef} className="container-order">
                <div className="box-order">
                    <div className="wrapper-order-title">
                        <span className="text-order-title">
                            Оформление заказа
                        </span>
                    </div>
                    <div className="container-main-order">
                        <div className="container-busket-order">
                            <div className="wrapper-text-order-title-items">
                                <span className="text-order-title-items">
                                    Ваш заказ
                                </span>
                            </div>

                            <table className="table-basket-border-order">
                                <tr className="table-basket-border-order table-title-order">
                                    <th className="column-id-order"> Артикул </th>
                                    <th className="column-img-order"> Картинка </th>
                                    <th className="column-name-product-order">Наименование товара</th>
                                    <th className="column-price-order">Цена за шт.</th>
                                    <th className="column-quanity-product-order">Кол.</th>
                                    <th className="column-end-price-order">Цена</th>
                                </tr>

                                {orderArrayState.map((item) => (
                                    <tr className="table-basket-border-order container-product-basket-order">
                                        <td> <span className="idtable-order"> {item.productId} </span>  </td>
                                        <td> <span> фывыф </span> </td>
                                        <td className="product-name-text-order"> <span> {item.productName} </span>  </td>
                                        <td className="product-price-text-order"> <span> {item.productPrice + " р"} </span> </td>
                                        <td className="product-quanity-text-order"> <span> {item.quanityProduct}  </span> </td>
                                        <td className="product-price-text-order"> <span> {item.productPrice * item.quanityProduct + " р"} </span> </td>
                                    </tr>
                                ))}

                            </table>

                        </div>
                        <div className="container-details-order">
                            <div className="wrapper-text-order-title-items">
                                <span className="text-order-title">
                                    Детали заказа
                                </span>
                            </div>
                            <div className="grid">
                                <div className="order-phone" > Телефон  </div>

                                <input type="number" className="input-phone">

                                </input>

                                <div> Населенный пункт </div>

                                <input type="text" className="">

                                </input>

                                <div> Имя </div>

                                <input type="text" className="">

                                </input>

                                <div>
                                    Электронная почта
                                </div>

                                <input type="text" className="">

                                </input>

                                <div> Комментарий </div>

                                <textarea className="input-comment">

                                </textarea>

                            </div>

                            <div className="bottom-order">
                                <div className="wrapper-title-bottom-order">
                                    <span className="title-bottom-order">
                                        {`Итого: ${quanityItemsEnd}
                                              товаров на сумму  ${endPriceState} р`}
                                    </span>
                                </div>

                                <div className="wrapper-payment-bottom-order">
                                    <div className="wrapper-payment-bottom-order-one-section">
                                        <div className="wrapper-payment-bottom-order-two">
                                            <div>
                                                <span> Ввод промокода </span>
                                                <input>
                                                </input>
                                            </div>

                                            <span> Выберите способ оплаты </span>
                                            <select className="">
                                                <option className=""> При получении </option>
                                                <option className=""> Онлайн</option>
                                            </select>
                                        </div>

                                        <div className="wrapper-details-order">
                                            <span> Детали заказа </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper-payment-bottom-order-two-section">
                                    <span className="text-doc">
                                        Нажимая на кнопку оформить заказ вы принимаете условие публичной оферты
                                    </span>
                                    <button className="button-close-order">
                                        Оформление заказа
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default BoxOrder;

