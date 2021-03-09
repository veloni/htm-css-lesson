import React, { useState } from 'react';

const MessageAddItem = () => {
	const [textContentMessage, setTextContentMessage] = useState('Товар пока не добавлен');
	const [hideMessageAlert, setHideMessageAlert] = useState(true);

	return (
		<div>
			<button
				className="dn js-trigger-item-added"
				onClick={() => setTextContentMessage("Товар добавлен")}
			/>
			<button
				className="dn js-trigger-message-alert-hide"
				onClick={() => setHideMessageAlert(!hideMessageAlert)}
			/>
			<button
				className="dn js-trigger-item-dont-added"
				onClick={() => setTextContentMessage("Товар уже был добавлен")}
			/>
			{hideMessageAlert && (
				<div className="wrapper-for-message">
					<div className="wrapper-message-alert">
						<span className="text-message-alert">
							{textContentMessage}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default MessageAddItem;