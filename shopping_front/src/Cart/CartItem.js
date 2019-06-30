import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class CartItem extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div>
                <div>{cart.productName}</div>
                <div>{cart.cost}</div>
                <div>{cart.amount}</div>
                <div>{cart.total}</div>
                <div><button onClick={this.remove}>X</button></div>
            </div>
        );
    }
    remove = async () => {
        if (await this.props.stores.CartStore.remove(this.props.cart.id)) {
            alert('삭제가 완료되었습니다.');
            window.location.reload();
        }
    }
}

export default CartItem;