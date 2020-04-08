export const AddCartItem = (CartItems, CartItemToAdd) => {
	const existsCartItem = CartItems.find((item) => item.id === CartItemToAdd.id);

	if (existsCartItem) {
		return CartItems.map((item) =>
			item.id === CartItemToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}

	return [...CartItems, { ...CartItemToAdd, quantity: 1 }];
};

export const RemoveCartItem = (CartItems, CartItemToRemove) => {
	return CartItems.filter((item) => item.id !== CartItemToRemove.id);
};

export const ChangeItemNumber = (CartItems, CartItemToChange) => {
	const quantity = CartItemToChange.quantity;
	if (quantity === 1) {
		return CartItems.filter((item) => item.id !== CartItemToChange.id);
	} else {
		return CartItems.map((item) =>
			item.id === CartItemToChange.id
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
	}
};
