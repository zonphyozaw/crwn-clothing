import React, { useState } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const Shop = () => {
    const [collections, setCollections] = useState(SHOP_DATA);    
    
    return (
        <div className='shop-page'>
           {
               collections.map(o => (
                   <CollectionPreview key={o.id} {...o}/>
               ))
           }
        </div>
    )
}

export default Shop;
