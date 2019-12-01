import React from 'react';
import {connect} from 'react-redux';

import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/actions/cartAction';


const CollectionItem = ({ item, addItem }) => {

    const { name,price,imageUrl } = item;

    return (
        <div className='collection-item'>
            <div className='image'
                 style={{ backgroundImage: `url(${imageUrl})` }}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton  onClick= {() => addItem( item )} inverted>add to cart</CustomButton>
        </div>
    )
}

export default connect(null,{addItem})(CollectionItem);
