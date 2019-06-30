import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect}  from 'react-router-dom';
import CartItem from "./CartItem";
import './Cart.scss';

@inject('stores')
@observer
class Cart extends Component {
    state = {
        goToMain: false,
    };

    componentDidMount() {
        if (! this.props.stores.UserStore.user) return <Redirect to='/profile' />;
        this.props.stores.CartStore.get(this.props.stores.UserStore.user.id);
    }

    render() {
        let total = 0;
        if (this.state.goToMain) return <Redirect to={'/'}/>;
        if (! this.props.stores.UserStore.user) return <Redirect to={'/profile'}/>;
        if (! this.props.stores.CartStore.cart) return <div/>;
        return (
            <div>
                {this.props.stores.CartStore.cart.length !== 0 ?
                <div className='cart'>
                    <div>
                        <div>주문 상품</div>
                        <div>가격</div>
                        <div>주문 개수</div>
                        <div>합계</div>
                        <div>취소</div>
                    </div>
                    {this.props.stores.CartStore.cart.map(c => {
                        total += c.total;
                        return <CartItem key={c.id} cart={c} />
                    })}
                    <div>총 금액은 {total}원입니다.</div>
                    <button onClick={this.order}>주문</button>
                </div> : <div className='cart-empty'>장바구니가 비어 있습니다.</div>}
            </div>
        );
    }
    order = async () => {
        if (await this.props.stores.CartStore.order(this.props.stores.UserStore.user.id)) {
            alert('주문이 완료되었습니다.');
            this.setState({
                goToMain: true,
            });
        } else {
            alert('주문에 실패하였습니다.');
        }
    }
}

export default Cart;