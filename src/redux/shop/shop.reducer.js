import SHOP_DATA from "./SHOP_DATA";

const initialState = {
	shopData: SHOP_DATA,
};

const ShopReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default ShopReducer;
