import React, { useState } from 'react';

const MessageAddItem = () => {

const [createMessageState, setCreateMessageState] = useState(false);
const [firstCreateMessageAlert, setFirstCreateMessageAlert] = useState(false);
const [itemAddedInBasketCheck, setItemAddedInBasketCheck] = useState(true);

const createFirstMessageAlert = () => {
    setFirstCreateMessageAlert(true);
    onlyOneCreateMessageAlert = false;
}

const classNameMessageAlert = `"text-message-alert ${itemAddedInBasketCheck ? "text-message-alert-item-added" : "text-message-alert-item-dont-added"}`;

  return (
    <div>
        <button 
            className="dn trigger-message-alert-open"
            onClick={() => setCreateMessageState(true)}
        > 
        </button>

        <button 
            className="dn trigger-message-alert-close"
            onClick={() => setCreateMessageState(false)}
        > 
        </button>

        <button 
            className="dn trigger-message-first-create"
            onClick={() => createFirstMessageAlert()}
        > 
        </button>

        <button 
            className="dn trigger-check-added-item"
            onClick={() => setItemAddedInBasketCheck(false)}
        > 
        </button>

        <button 
            className="dn trigger-change-text-message"
            onClick={() => setItemAddedInBasketCheck(true)}
        > 
        </button>

        {createMessageState && firstCreateMessageAlert &&
        <div className="wrapper-for-message">
            <div className="wrapper-message-alert">
                <span className={classNameMessageAlert}>
                </span>
            </div>
        </div>
        }
    </div>
  );
};

export default MessageAddItem;

