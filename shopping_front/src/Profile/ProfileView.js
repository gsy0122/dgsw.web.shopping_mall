import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class ProfileView extends Component {
    render() {
        return (
            <div>
                {this.props.stores.UserStore.user.account}
            </div>
        );
    }
}

export default ProfileView;