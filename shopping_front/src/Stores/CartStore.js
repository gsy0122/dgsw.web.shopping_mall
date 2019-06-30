import { observable, action } from 'mobx';
import axios from 'axios';

class CartStore {
    static __instance = null;
    static getInstance() {
        if (CartStore.__instance === null) {
            CartStore.__instance = new CartStore();
        }
        return CartStore.__instance;
    }
    constructor() {
        CartStore.__instance = this;
    }

    @action add = async (cart) => {
        try {
            this.cart = null;
            let response = await axios({
                url: `http://localhost:8080/api/cart`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(cart)
            });
            return (response.status === 200);
        } catch(e) {
            alert(e.toLocaleString());
            return false;
        }
    };

    @action remove = async (id) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/cart?id=${id}`,
                method: 'delete',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
            });
            return (response.status === 200);
        } catch(e) {
            alert(e.toLocaleString());
            return false;
        }
    };

    @action order = async (userId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/cart/userId?userId=${userId}`,
                method: 'delete',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
            });
            console.log(response);
            return (response.status === 200);
        } catch(e) {
            alert(e.toLocaleString());
            return false;
        }
    };

    @observable cart = null;
    @action get = async (userId) => {
        try {
            this.cart = null;
            let response = await axios({
                url: 'http://localhost:8080/api/cart/userId?userId=' + userId,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200) {
                this.cart = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }


}

export default CartStore.getInstance();
