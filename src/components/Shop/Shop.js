import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Shop extends Component {
    
    state = { collections: SHOP_DATA };
    
    render() {
        const { collections } = this.state;
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
}

export default Shop;
