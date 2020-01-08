import React, { useState } from "react";

import ShopData from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

function ShopPage() {
  const [collections, setCollection] = useState(ShopData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
