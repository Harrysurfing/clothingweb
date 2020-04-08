import CartActionTypes from "./cart.types";
import { AddCartItem, RemoveCartItem, ChangeItemNumber } from "./cart.util";

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: AddCartItem(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: RemoveCartItem(state.cartItems, action.payload),
			};
		case CartActionTypes.CHANGE_ITEM_NUMBER:
			return {
				...state,
				cartItems: ChangeItemNumber(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
