import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Login from "./Login";
import Register from "./Register";

import './Profile.scss';
import ProfileView from "./ProfileView";

class Profile extends Component {
    render() {
        if (this.props.match && this.props.match.params.command === 'register') return <Register/>
        if (this.props.match && this.props.match.params.command === 'view') return <ProfileView/>
        return (
            <Login/>
        );
    }
}

export default Profile;