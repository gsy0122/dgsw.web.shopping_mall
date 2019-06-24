import React, {Component} from 'react';
import MenuView from "./MenuView";
import {inject, observer} from "mobx-react";

import './Menu.scss';

@inject('stores')
@observer
class Menu extends Component {
    render() {
        return (
            <MenuView menuId={this.props.match.params.menuId}/>
        );
    }
}

export default Menu;