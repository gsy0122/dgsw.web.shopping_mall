import React, {Component} from 'react';
import MenuView from "./MenuView";

import './Menu.scss';

class Menu extends Component {
    render() {
        if (this.props.match.params.subMenuId) {
            console.log(this.props.match.params.subMenuId);
            return <MenuView menuId={this.props.match.params.menuId} subMenuId={this.props.match.params.subMenuId}/>;
        }
        return (
            <MenuView menuId={this.props.match.params.menuId}/>
        );
    }
}

export default Menu;