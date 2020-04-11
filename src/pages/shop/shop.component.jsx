import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop/shop.selector";

const ShopPage = ({ shopData }) => (
	<div className="shop-page">
		{shopData.map(({ id, ...otherProps }) => (
			<CollectionPreview key={id} {...otherProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	shopData: selectShopData,
});

export default connect(mapStateToProps)(ShopPage);
