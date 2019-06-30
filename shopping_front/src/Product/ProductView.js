import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import ProductReview from "./ProductReview";

@inject('stores')
@observer
class ProductView extends Component {
    state = {};

    componentDidMount() {
        this.props.stores.ProductStore.getProduct(this.props.id);
        this.props.stores.ReviewStore.getReviews(this.props.id);
    }

    render() {
        if (! this.props.stores.ProductStore.product) return <div/>;
        const product = this.props.stores.ProductStore.product;
        return (
            <div className='product-view'>
                <div className='product-name'>{product.name}</div>
                <img src={`http://localhost:8080/api/image/${product.attachId}`} alt='사진' />
                <div className='product-info'>
                    <div>제조사: {product.factory}</div>
                    <div>마일리지: {product.mileage}</div>
                    <div>주문 수량: <input type='number' min='1' onChange={e => this.setState({
                        amount: e.target.value,
                    })}/></div>
                    <div>시중 가격: {product.price}</div>
                    <div>판매 가격: {product.cost}</div>
                    <button onClick={this.cart}>장바구니</button>
                </div>
                <div className='product-view-details'>
                    <div>
                        <div className='product-title'>제품 상세 설명</div>
                        <div>{product.details}</div>
                    </div>
                    <div>
                        <div className='product-title'>구매 정보</div>
                        <div>000 님의 쇼핑 도우미 000입니다.</div>
                        <div>000님의 상품에 대한 문의나 배송 문의는 저에게 바로 연락을 주세요.</div>
                        <div>고객 모두를 소중히 여기며 최고의 서비스를 약속 드립니다.</div>
                        <div>직통 전화 번호(080-000-0000)나 MD 전용 게시판을 이용해 주세요.</div>
                    </div>
                    <div>
                        <div className='product-title'>고객의 상품평</div>
                        <div>
                            <input onChange={e => this.setState({
                                content: e.target.value,
                            })} />
                            <button onClick={this.review}>등록</button>
                        </div>
                        {this.props.stores.ReviewStore.reviews.length !== 0 &&
                        <div className='product-review'>
                            <div>
                                <div>아이디</div>
                                <div>상품평 내용</div>
                                <div>날짜</div>
                            </div>
                            {this.props.stores.ReviewStore.reviews.map(review => (
                                <ProductReview key={review.id} review={review}/>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
        );
    }

    cart = async () => {
        if (! this.props.stores.UserStore.user) {
            alert('로그인이 필요합니다.');
            return;
        }
        const total = this.state.amount * this.props.stores.ProductStore.product.cost;
        await this.setState({
            ...this.state,
            amount: this.state.amount,
            userId: this.props.stores.UserStore.user.id,
            productId: this.props.stores.ProductStore.product.id,
            cost: this.props.stores.ProductStore.product.cost,
            total,
        });
        console.log(this.state);
        if (await this.props.stores.CartStore.add(this.state)) alert('장바구니에 상품이 추가되었습니다.');
    }

    review = async () => {
        if (! this.props.stores.UserStore.user) {
            alert('로그인이 필요합니다.');
            return;
        }
        const review = {
            productId: await this.props.stores.ProductStore.product.id,
            userId: await this.props.stores.UserStore.user.id,
            content: this.state.content,
        }
        console.log(review);
        if (await this.props.stores.ReviewStore.add(review)) {
            alert('상품평이 추가되었습니다.');
            window.location.reload();
        }
    }
}

export default ProductView;