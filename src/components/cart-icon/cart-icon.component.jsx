import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import "./cart-icon.style.scss";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />

		<span className="item-count">{itemCount}</span>
	</div>
);
const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispacthToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispacthToProps)(CartIcon);
