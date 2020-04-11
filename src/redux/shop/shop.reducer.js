import SHOP_DATA from "./SHOP_DATA";

const initialState = {
	shopData: SHOP_DATA,
};

const ShopReducer = (state = initialState, action) => {
	switch (action) {
		default:
			return state;
	}
};

export default ShopReducer;
