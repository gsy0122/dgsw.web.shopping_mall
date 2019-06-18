import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";

@inject('stores')
@observer
class Register extends Component {
    state = {
        account: '',
        password: '',
        passwordCheck: '',
        username: '',
        tel: '',
        phone: '',
        zipCode1: '',
        zipCode2: '',
        address: '',
        email: '',
        terms: '',
        isChecked: false,
        goToLogin: false,
    }
    render() {
        if (this.state.goToLogin) return <Redirect to='/profile' />
        return (
            <div className='profile profile-register'>
                <h1>회원가입</h1>
                <div>
                    가족을 위한 전문 쇼핑몰로 저렴한 가격과 신개념 고객서비스를 통해 고객 만족을 최우선으로 합니다.
                    쇼핑몰에 회원으로 가입하시면 보다 편리합니다.
                </div>
                <div>
                    희망 아이디 <input name='account' onChange={this.updateValue} /> 
                    <button onClick={this.checkAccount}>중복 확인</button>
                    (6~10자의 영문 및 숫자 가능하며 여백은 사용할 수 없습니다)
                </div>
                <div>
                    희망 패스워드 <input name='password' type='password' onChange={this.updateValue} />
                    (6~10자 이내로 영문과 숫자의 조합으로 만드세요)
                </div>
                <div>
                    패스워드 확인 <input name='passwordCheck' type='password' onChange={this.updateValue} />
                </div>
                <div>
                    사용자 이름 <input name='username' onChange={this.updateValue} />
                    (이름에 공백은 제거해 주세요)
                </div>
                <div>전화번호 <input name='tel' onChange={this.updateValue} /></div>
                <div>휴대폰 번호 <input name='phone' onChange={this.updateValue} /></div>
                <div>우편번호 <input name='zipCode1' onChange={this.updateValue} />-
                    <input name='zipCode2' onChange={this.updateValue} />
                    (배달시 혼란을 피하기위해 정확히 기입해주시기 바랍니다)
                </div>
                <div>주소 <input name='address' onChange={this.updateValue} /></div>
                <div>이메일 <input name='email' onChange={this.updateValue} /></div>
                <div>
                    회원 약관
                    <div className='profile-register-terms'>동의하시겠습니까?</div>
                    회원 약관에
                    <input type='radio' name='terms' value='agree' onChange={this.updateTerms} /> 동의함
                    <input type='radio' name='terms' value='disagree' onChange={this.updateTerms} /> 동의 안 함
                </div>
                <div><button onClick={this.register}>회원가입</button></div>
            </div>
        );
    }

    checkAccount = async () => {
        if (this.state.account === '') {
            alert('아이디를 입력해 주세요.');
            return;
        }
        await this.props.stores.UserStore.checkAccount(this.state.account);
        if (this.props.stores.UserStore.user !== null) alert('이미 존재하는 아이디입니다.');
        else {
            alert('사용 가능한 아이디입니다.');
            this.setState({
                isChecked: true,
            });
        }
    }

    updateValue = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    updateTerms = e => {
        this.setState({
            terms: e.currentTarget.value,
        });
    }

    register = async () => {
        if (! this.state.isChecked) {
            alert('아이디 중복 확인이 필요합니다.');
            return;
        }
        if (this.state.password !== this.state.passwordCheck) {
            alert('패스워드가 일치하지 않습니다.');
            return;
        }
        if (this.state.terms !== 'agree') {
            alert('회원 약관에 동의가 필요합니다.');
            return;
        }
        await this.props.stores.UserStore.register(this.state);
        alert('가입이 완료되었습니다. 로그인 화면으로 이동합니다.');
        this.setState({
            goToLogin: true,
        });
    }
}

export default Register;