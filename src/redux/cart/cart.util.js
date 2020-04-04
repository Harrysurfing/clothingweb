export const AddCartItem = (CartItems, CartItemToAdd) => {
	const existsCartItem = CartItems.find(item => item.id === CartItemToAdd.id);

	if (existsCartItem) {
		return CartItems.map(item =>
			item.id === CartItemToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}

	return [...CartItems, { ...CartItemToAdd, quantity: 1 }];
};
