import React, { useEffect, useState, useRef } from 'react';
import CloseOrder from './CloseOrder.jsx';

const BoxOrder = ({
    productArrayState,
    setOrderState,
    quanityItems,
    endPriceForOrder,

}) => {
    const boxOrderRef = useRef(null);
    window.boxOrderRefWindow = boxOrderRef;

    const selectRef = useRef(null);
    const inputPromo = useRef(null);

/*     const [orderArrayState, setOrderArrayState] = useState([...productArrayState]); */
    const [endPriceState, setEndPriceSate] = useState(saveDiskount ? endPriceForOrder : endPriceForOrder * 0.9);
    const [quanityItemsEnd, setQuanityItemsEnd] = useState(quanityItems);

    const [phoneUser, setPhoneUser] = useState(savePhoneUser);
    const [nameUser, setNameUser] = useState(saveNameUser);
    const [adressUser, setAdressUser] = useState(saveAdressUser);
    const [emailUser, setEmailUser] = useState(saveEmailUsers);
    const [paymentMethod, setPaymentMethod] = useState(savePaymentMethod);
    const [commitOrder, setCommitOrder] = useState(saveCommitOrder);

    const [phoneUserCorrect, setPhoneUserCorrect] = useState(true);
    const [nameUserCorrect, setNameUserCorrect] = useState(true);
    const [adressUserCorrect, setAdressUserCorrect] = useState(true);
    const [emailUserCorrect, setEmailUserCorrect] = useState(true);

    const [seeCloseOrder, setSeeCloseOrder] = useState(false);
    const [discountGive, setDiscountGive] = useState(saveDiskount);

    useEffect(() => {
        saveEmailUsers = emailUser;
        savePhoneUser = phoneUser;
        saveNameUser = nameUser;
        saveAdressUser = adressUser;
        savePaymentMethod = paymentMethod;
        saveCommitOrder = commitOrder;
        saveDiskount = discountGive;
    });

    const inputGiveDiskount= (e) => {
        if (e.key === 'Enter' && inputPromo.current.value === 'diskount' && discountGive && quanityItemsEnd != null ) {
            alert('Ваша скидка 10 процентов')
            setEndPriceSate(endPriceState * 0.9);
            setDiscountGive(false);
          }
    }

    const giveDataUsers = (e, set) => {
        set(e.target.value);
        return;
    }

    const checkCorrectValue = () => {
        const phoneRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        const emailRegular = /^\S+@\S+$/;
        const nameRegular = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
        let messageAlert = "";

        if (!phoneRegular.test(phoneUser)) {
            messageAlert = "телефон не верен  ";
            setPhoneUserCorrect(false);
        } else {
            setPhoneUserCorrect(true);
        }

        if (!emailRegular.test(emailUser)) {
            messageAlert = messageAlert + " email не верен!";
            setEmailUserCorrect(false);
        } else {
            setEmailUserCorrect(true);
        }

        if (!nameRegular.test(nameUser)) {
            messageAlert = messageAlert + "  ФИО не верно!";
            setNameUserCorrect(false);
        } else {
            setNameUserCorrect(true);
        }

        if (adressUser === 0) { messageAlert = messageAlert + "  адреса нет"; }

        console.log(quanityItemsEnd);

        if (quanityItemsEnd === null) { messageAlert = messageAlert + " Вы ничего не добавили"; }

        if (messageAlert === "") { 
            setSeeCloseOrder(!seeCloseOrder);
            return; 
        }

            alert(messageAlert);
    }

    const closeOrder = () => {
        setOrderState(false);
    }

    const close = (e) => {
        if (e.keyCode !== 27) { return; };
        closeOrder();
    }

    useEffect(() => {
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [])


    return (
        <div>
            {seeCloseOrder && <CloseOrder
                phoneUser={phoneUser}
                nameUser={nameUser}
                adressUser={adressUser}
                emailUser={emailUser}
                endPriceState={endPriceState}
                quanityItemsEnd={quanityItemsEnd}
                paymentMethod={paymentMethod}
            />}


        <div className="order-wrapper">    
            <button
                className="dn trigger-close-last-order"
                onClick={() => setSeeCloseOrder(!seeCloseOrder)}
            />

            <button
                className="dn trigger-fillingOrder"
                onClick={() => giveDataOrder()}
            />


            <div ref={boxOrderRef} className="container-order">
                <div className="box-order">

                    <div className="wrapper-order-title">
                        <span className="text-order-title">
                            Оформление заказа
                        </span>
                        <div className="close-order"
                            onClick={() => closeOrder()}
                        >
                            Закрыть
                        </div>
                    </div>

                    <div className="container-main-order">
                        <div className="container-busket-order">
                            <div className="wrapper-text-order-title-items">
                                <span className="text-order-title-items">
                                    Ваш заказ
                                </span>
                            </div>

                            <table className="table-basket-border-order-main">
                                <tr className="table-basket-border-order">
                                    <th className="column-id-order"> Артикул </th>
                                    <th className="column-img-order"> Картинка </th>
                                    <th className="column-name-product-order">Наименование товара</th>
                                    <th className="column-price-order">Цена за шт.</th>
                                    <th className="column-quanity-product-order">Кол.</th>
                                    <th className="column-end-price-order">Цена</th>
                                </tr>

                                {productArrayState.map((item) => (
                                    <tr className="table-basket-border-order container-product-basket-order">
                                        <td> <span className="idtable-order"> {item.productId} </span>  </td>
                                        
                                        <td> 
                                            <img   
                                                className=""
                                                src={"./img/item-2.png"}>
                                            </img> 
                                        </td>

                                        <td className="product-name-text-order"> <span> {item.productName} </span>  </td>
                                        <td className="product-price-text-order"> <span> {item.productPrice / item.quanityProduct + " р"} </span> </td>
                                        <td className="product-quanity-text-order"> <span> {item.quanityProduct}  </span> </td>
                                        <td className="product-price-text-order"> <span> {item.productPrice + " р"} </span> </td>
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

                                <div className="order-phone">  Телефон
                                    <span className={phoneUserCorrect ? "dn" : "incorect-value"}>
                                            *
                                    </span>
                                </div>
                                <input
                                    defaultValue = {phoneUser}
                                    onChange={(e) => giveDataUsers(e, setPhoneUser)}
                                    type="number"
                                    maxlength="11"
                                    className={phoneUserCorrect ? "input-phone" : "incorect-value"}
                                />


                                <div> Населенный пункт
                                    <span className={adressUserCorrect ? "dn" : "incorect-value"}>
                                            *
                                    </span>
                                </div>
                                <input type="text" className=""
                                    defaultValue = {adressUser}
                                    onChange={(e) => giveDataUsers(e, setAdressUser)}
                                    className={adressUserCorrect ? "input-phone" : "incorect-value"}
                                />

                                <div> Имя
                                    <span className={nameUserCorrect ? "dn" : "incorect-value"}>
                                            *
                                    </span>
                                </div>
                                <input type="text" className=""
                                    defaultValue = {nameUser}
                                    onChange={(e) => giveDataUsers(e, setNameUser)}
                                    className={nameUserCorrect ? "input-phone" : "incorect-value"}
                                />

                                <div>
                                    Электронная почта
                                    <span className={emailUserCorrect ? "dn" : "incorect-value"}>
                                        *
                                    </span>
                                </div>
                                <input type="text" className=""
                                    defaultValue = {emailUser}
                                    onChange={(e) => giveDataUsers(e, setEmailUser)}
                                    className={emailUserCorrect ? "input-phone" : "incorect-value"}
                                />

                                <div> Комментарий </div>

                                <textarea 
                                    defaultValue={saveCommitOrder}
                                    className="input-comment"
                                    onChange={(e) => giveDataUsers(e, setCommitOrder)}>

                                </textarea>

                            </div>

                            <div className="bottom-order">
                                <div className="wrapper-title-bottom-order title-bottom-order">
                                    <span className={quanityItemsEnd || "if-dont-have-items-ins-busket"}>
                                        {quanityItemsEnd && `Итого: ${quanityItemsEnd}
                                        товаров на сумму  ${endPriceState} р`}
                                    </span>
                                </div>

                                <div className="wrapper-payment-bottom-order">

                                    <div className="wrapper-payment-bottom-order-two">
                                        <div className="wrapper-promo-code">
                                            <span className="text-bottom-order"> Ввод промокода: </span>
                                            <input 
                                                defaultValue="diskount"
                                                ref={inputPromo}
                                                className="input-promo"
                                                onKeyDown={(e) => inputGiveDiskount(e)} 
                                            >
                                            </input>
                                        </div>
                                        <div className="wraper-payment">
                                            <span className="text-bottom-order"> Выберите способ оплаты: </span>
                                            <select
                                            defaultValue={savePaymentMethod}
                                                ref={selectRef}
                                                className="select-payment-method"
                                                onClick={(e) => setPaymentMethod(selectRef.current.value)}>
                                                <option className="">
                                                    При получении
                                                    </option>

                                                <option className="">
                                                    Онлайн</option>
                                            </select>

                                        </div>

                                        {/*  <div className="wrapper-details-order">
                                            <span className="text-bottom-order"> Детали заказа: </span>
                                    
                                        </div> */}
                                    </div>
                                </div>
                                <div className="wrapper-payment-bottom-order-two-section">
                                    <span className="text-doc">
                                        Нажимая на кнопку оформить заказ вы принимаете условие публичной оферты.
                                    </span>
                                    <button className="button-close-order"
                                        onClick={(e) => checkCorrectValue()}
                                    >
                                        Оформление заказа
                                    </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
       </div>
      </div>
    );
};

export default BoxOrder;

