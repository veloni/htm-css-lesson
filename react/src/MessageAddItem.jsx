import React, { useState } from 'react';

const MesageAddItem = () => {

const [textContentMessage, setTextContentMessage] = useState("Товар пока не добавлен");

  return (
    <div>
        <button 
            className="dn js-trigger-item-added"
            onClick={(e) => setTextContentMessage("Товар добавлен")}
        />

        <button 
            className="dn js-trigger-item-dont-added"
            onClick={(e) => setTextContentMessage("Товар уже был добавлен")}
        />

        <div className="wrapper-for-message">
            <div className="wrapper-message-alert">
                <span className={"text-mesasge-alert"}>
                    {textContentMessage}
                </span>
            </div>
        </div>
        
    </div>
  );
};

export default MesageAddItem;