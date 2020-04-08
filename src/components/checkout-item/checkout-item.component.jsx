import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import {
	clearItemFromCart,
	changeItemNumber,
	addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, addItem, removeItem, changeItemNumber }) => {
	const { name, imageUrl, quantity, price } = cartItem;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => changeItemNumber(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>

			<div className="remove-button" onClick={() => removeItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
	changeItemNumber: (cartItem) => dispatch(changeItemNumber(cartItem)),
	addItem: (cartItem) => dispatch(addItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
