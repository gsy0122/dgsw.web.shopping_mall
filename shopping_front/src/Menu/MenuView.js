import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class MenuView extends Component {
    componentDidMount() {
        this.props.stores.MenuStore.getMenu(this.props.menuId);
    }

    render() {
        if (! this.props.stores.MenuStore.menu) return <div/>
        return (
            <div className='menu-view'>
                {this.props.stores.MenuStore.menu.name}
            </div>
        );
    }
}

export default MenuView;