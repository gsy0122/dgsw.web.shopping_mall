import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class ShoppingView extends Component {
    componentDidMount() {
        this.props.stores.EventStore.getEvents();
    }

    render() {
        if (! this.props.stores.EventStore.events) return <div/>;
        return (
            <div>
                <div className='main-visual'>Main Visual 및 이벤트 공지 뉴스</div>
                {this.props.stores.EventStore.events.map(event => (
                    <div key={event.id} className='event-product'>
                        <div>{event.name}</div>
                        <div className='event-product-info'>
                            <img src={`http://localhost:8080/api/image/${event.attachId}`} alt='사진' />
                            <div>상품 이름: {event.productName}</div>
                            <div>상품 내용: {event.details}</div>
                            <div>가격: {event.cost}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ShoppingView;