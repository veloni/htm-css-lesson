import React, { useEffect, useState } from 'react';
import FillingBasket from './ fillingBasket';

const Basket = () => {
    const [productArrayState, setProductArrayState] = useState([]);
    let quanityProduct = 1; //времено тут
    const getItem = () => {
        setProductArrayState([
            ...productArrayState,
            {
                productName,
                quanityProduct,
                productPrice,
            },
        ]);
    }
    /*    useEffect(() => {
          console.log(productArrayState);
      }); */

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