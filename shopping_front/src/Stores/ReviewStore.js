import {observable, action} from "mobx";
import axios from 'axios';

class ReviewStore {
    static __instance = null;

    static getInstance() {
        if (ReviewStore.__instance === null) {
            ReviewStore.__instance = new ReviewStore();
        }
        return ReviewStore.__instance;
    }

    constructor() {
        ReviewStore.__instance = this;
    }

    @action add = async (review) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/review`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: review,
            });
            return (response.status === 200);
        } catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    };

    @observable reviews = [];
    @action
    async getReviews(productId) {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/review/productId?productId=' + productId,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200 && response.data !== '') {
                this.reviews = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }
}

export default ReviewStore.getInstance();