import {observable, action} from "mobx";
import axios from 'axios';

class UserStore {
    static __instance = null;
    static getInstance() {
        if (UserStore.__instance === null) {
            UserStore.__instance = new UserStore();
        }
        return UserStore.__instance;
    }
    constructor() {
        UserStore.__instance = this;
    }

    @action register = async (user) => {
        try {
            this.user = null;
            let response = await axios({
                url: `http://localhost:8080/api/user`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(user)
            });
            return (response.status === 200);
        } catch(e) {
            alert(e.toLocaleString());
            return false;
        }
    };

    @observable user = null;
    @action login = async (account, password) => {
        try {
            this.user = null;
            let response = await axios({
                url: 'http://localhost:8080/api/user/login',
                method: 'post',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                data: {
                    account, password,
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200 && response.data !== '') {
                this.user = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @action logout = () => {
        this.user = null;
    }

    @action checkAccount = async (account) => {
        try {
            this.user = null;
            let response = await axios({
                url: 'http://localhost:8080/api/user/account?account=' + account,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200 && response.data !== "") {
                this.user = response.data;
            }
        }
         catch (e) {
            alert(e.toLocaleString());
        }
        return false;
    }
};

export default UserStore.getInstance();