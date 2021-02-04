import React, { useEffect, useState, useRef } from 'react';

const BoxOrder = () => {
    const boxOrderRef = useRef(null);
    window.boxOrderRefWindow = boxOrderRef;
    
    const [orderArrayState, setOrderArrayState] = useState(null);
    

    const giveDataOrder = () => {
     
   
        const newProductArray = endProductArray.map((item) => {
            console.log(item);
            return item;
        });

        setOrderArrayState([...newProductArray]);
 
        console.log(newProductArray);
        console.log(orderArrayState);
    }

    useEffect(() => {
    
    });




    

    return (
        <div>
              <button 
                        className="dn trigger-fillingOrder"
                        onClick={() => giveDataOrder()}
                    />

            {orderArrayState && <div ref={boxOrderRef} className="container-order">
                <div className="box-order">
                    <span className="text-order-title">
                        Оформление заказа
                    </span>

                    <div className="container-main-order">
                        <div className="container-busket-order">
                            <span className="text-order-title">
                                Ваш заказ
                            </span>
                        
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

                    {orderArrayState.map((item,index) =>(
                        <tr className="table-basket-border container-product-basket">
                            <td>  </td>
                            <td> <span className="idtable dn"> {} </span></td>
                            <td className="product-name-text"> {item.productId} </td>
                            <td className="product-price-text"> { + " р"} </td>
                            <td className="product-quanity-text"> {} </td>
                            <td className="product-price-text"> { + " р"} </td>
                        </tr>
                    ))}
                    
                    </table>

                        </div>
                        <div className="container-details-order">
                            <span className="text-order-title">
                                Оформление заказа
                            </span>
                        </div>
                    </div>
                    <div className="order-bottom">

                    </div>
                </div>

            </div>}
        </div>
    );
};

export default BoxOrder;

