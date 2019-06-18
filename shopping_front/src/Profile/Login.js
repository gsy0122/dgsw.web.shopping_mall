import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Login extends Component {
    state = {
        account: '',
        password: '',
        goToView: false,
        goToRegister: false,
    };

    render() {
        if (this.state.goToView) return <Redirect to='/profile/view' />
        if (this.state.goToRegister) return <Redirect to='/profile/register'/>
        return (
            <div className='profile profile-login'>
                <div>아이디 <input onChange={this.updateAccount}/></div>
                <div>패스워드 <input type='password' onChange={this.updatePassword}/></div><br/>
                <div>
                    <button onClick={this.login}>로그인</button>
                    <button onClick={this.register}>회원가입</button>
                </div>
            </div>
        );
    }

    updateAccount = event => {
        this.setState({
            ...this.state,
            account: event.target.value
        });
    };
    updatePassword = (event, editor) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    };

    login = async () => {
        if (this.state.account === '' || this.state.password === '') {
            alert('아이디와 패스워드를 모두 입력해 주세요.');
            return;
        }
        await this.props.stores.UserStore.login(this.state.account, this.state.password);
        if (this.props.stores.UserStore.user !== null) {
            this.setState({
                ...this.state,
                goToView: true,
            });
        } else {
            alert('아이디와 패스워드가 일치하지 않습니다.');
            return;
        }
    };

    register = () => {
        this.setState({
            goToRegister: true,
        });
    };
}

export default Login;