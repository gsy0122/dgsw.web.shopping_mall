import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class MenuView extends Component {
    componentDidMount() {
        this.props.stores.MenuStore.getMenu(this.props.menuId);
        this.props.stores.ProductStore.getProductsByMenu(this.props.menuId);
    }
    
    render() {
        if (! this.props.stores.MenuStore.menu || ! this.props.stores.ProductStore.productsByMenu) return <div/>;
        return (
            <div className='menu-view'>
                {this.props.stores.ProductStore.productsByMenu.map(product => (
                    <div key={product.id}>
                        <img src={`http://localhost:8080/api/image/${product.attachId}`} />
                        <div>{product.name}</div>
                        <div>{product.details}</div>
                        <div>{product.cost}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MenuView;