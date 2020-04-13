import React from "react";
import "./check-out.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartTotalPrice,
	selectCartItems,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckOutPage = ({ totalPrice, cartItems }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map((item) => (
			<CheckoutItem key={item.id} cartItem={item} />
		))}
		<div className="total">
			<span>Total: ${totalPrice}</span>
		</div>
		<StripeCheckoutButton price={totalPrice} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckOutPage);
