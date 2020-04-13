import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
	selectShop,
	(shop) => shop.shopData
);

export const selectCollectionsForPreview = createSelector(
	selectShopData,
	(shopData) => Object.keys(shopData).map((key) => shopData[key])
);

export const selectCollection = (collectionUrl) =>
	createSelector(selectShopData, (shopData) => shopData[collectionUrl]);
