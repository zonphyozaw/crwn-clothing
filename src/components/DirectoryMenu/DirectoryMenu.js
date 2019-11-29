import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem';
import SECTIONS_DATA from './SectionsData';
import './DirectoryMenu.scss';


class DirectoryMenu extends Component {
    
    state = { sections: SECTIONS_DATA };

    render() {
        const { sections } = this.state;
        return (
            <div className="directory-menu">
                { sections.map(o => <MenuItem key={ o.id }
                                              title={o.title} 
                                              imageUrl={o.imageUrl}
                                              size={o.size}
                                              slug={o.linkUrl}/>
                ) }
            </div>
        );
    }    
}

export default DirectoryMenu;
