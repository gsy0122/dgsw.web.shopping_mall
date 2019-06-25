import { observable, action } from 'mobx';
import axios from 'axios';

class ProductStore {
    static __instance = null;
    static getInstance() {
        if (ProductStore.__instance === null) {
            ProductStore.__instance = new ProductStore();
        }
        return ProductStore.__instance;
    }
    constructor() {
        ProductStore.__instance = this;
    }

    @observable product = null;
    @action getProduct = async (id) => {
        try {
            this.product = null;
            let response = await axios({
                url: 'http://localhost:8080/api/product/id?id=' + id,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200) {
                this.product = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @observable productsByMenu = [];
    @action
    async getProductsByMenu(menuId) {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/product/menuId?menuId=' + menuId,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200 && response.data !== '') {
                this.productsByMenu = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @observable products = [];
    @action
    async getProducts() {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/product',
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200 && response.data !== '') {
                this.products = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }
}

export default ProductStore.getInstance();
