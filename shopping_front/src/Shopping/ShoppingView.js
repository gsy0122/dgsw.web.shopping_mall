import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class ShoppingView extends Component {
    componentDidMount() {
        this.props.stores.EventStore.getEvents();
    }

    render() {
        return (
            <div className='main-visual'>
                <div>Main Visual 및 이벤트 공지 뉴스</div>
                <div className='main-event'>
                    {this.props.stores.EventStore.events.map(event => (
                        <div key={event.id}>
                            {event.name}
                            <div className='event-product'>
                                <div>상품 이름:</div>
                                <div>상품 내용:</div>
                                <div>가격:</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ShoppingView;