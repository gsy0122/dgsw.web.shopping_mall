import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

@inject('stores')
@observer
class MenuSideBar extends Component {
    componentDidMount() {
        this.props.stores.SubMenuStore.getSubMenusByMenu(this.props.menuId);
    }

    render() {
        const subMenus = this.props.stores.SubMenuStore.subMenus.map(submenu => {
            return <li key={submenu.id}><Link to={`/menu/${this.props.menuId}/${submenu.id}`}>{submenu.name}</Link></li>
        });
        return (
            <ul className='menu-side-bar'>
                {subMenus}
            </ul>
        );
    }
}

export default MenuSideBar;