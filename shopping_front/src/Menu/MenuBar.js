import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

@inject('stores')
@observer
class MenuBar extends Component {
    componentDidMount() {
        this.props.stores.MenuStore.getMenus();
    }

    render() {
        const menus = this.props.stores.MenuStore.menus.map(menu => {
            return <li key={menu.id}><Link to={`/menu/${menu.id}`}>{menu.name}</Link></li>
        });
        return (
            <div className='category-bar'>
                <ul>
                    {menus}
                </ul>
            </div>
        );
    }
}

export default MenuBar;