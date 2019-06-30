import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class ProfileView extends Component {
    render() {
        return (
            <div className='profile-view'>
                <div>{this.props.stores.UserStore.user.username} 님의 정보입니다.</div>
                <div>아이디: {this.props.stores.UserStore.user.account}</div>
                <div>전화번호: {this.props.stores.UserStore.user.tel}</div>
                <div>휴대폰: {this.props.stores.UserStore.user.phone}</div>
                <div>우편번호: {this.props.stores.UserStore.user.zipCode1}-{this.props.stores.UserStore.user.zipCode2}</div>
                <div>주소: {this.props.stores.UserStore.user.address}</div>
                <div>마일리지: {this.props.stores.UserStore.user.address}</div>
            </div>
        );
    }
}

export default ProfileView;