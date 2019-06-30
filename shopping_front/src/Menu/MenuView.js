import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";
import MenuSideBar from "./MenuSideBar";
import {toJS} from 'mobx';

@inject('stores')
@observer
class MenuView extends Component {

    componentDidMount() {
        if (this.props.subMenuId) {
            this.props.stores.ProductStore.getProductsBySubMenu(this.props.subMenuId);
        } else {
            this.props.stores.ProductStore.getProductsByMenu(this.props.menuId);
        }
        this.props.stores.MenuStore.getMenu(this.props.menuId);
    }

    componentDidUpdate(nextProps, nextState, nextContext) {
        if (this.props !== nextProps) {
            if (this.props.subMenuId) {
                this.props.stores.ProductStore.getProductsBySubMenu(this.props.subMenuId);
            } else {
                this.props.stores.ProductStore.getProductsByMenu(this.props.menuId);
            }
        }
    }

    render() {
        if (! this.props.stores.MenuStore.menu || ! this.props.stores.ProductStore.products) return <div/>;

        console.log(toJS(this.props.stores.ProductStore.products));
        return (
            <div className='menu-view'>
                <MenuSideBar menuId={this.props.menuId}/>
                {this.props.stores.ProductStore.products.map(product => (
                    <div key={product.id}>
                        <img src={`http://localhost:8080/api/image/${product.attachId}`} alt='사진' />
                        <div>{product.name}</div>
                        <div>{product.details}</div>
                        <div>{product.cost}</div>
                        <Link to={`/view/${product.id}`}>상세보기</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default MenuView;