import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = ({ state, toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		{console.log(state)}
		<ShoppingIcon className="shopping-icon" />

		<span className="item-count">0</span>
	</div>
);
const mapStateToProps = state => ({
	state
});

const mapDispacthToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispacthToProps)(CartIcon);
