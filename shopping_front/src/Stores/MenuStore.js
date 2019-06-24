import { observable, action } from 'mobx';
import axios from 'axios';

class MenuStore {
    static __instance = null;
    static getInstance() {
        if (MenuStore.__instance === null) {
            MenuStore.__instance = new MenuStore();
        }
        return MenuStore.__instance;
    }
    constructor() {
        MenuStore.__instance = this;
    }

    @observable menu = null;
    @action getMenu = async (id) => {
        try {
            this.menu = null;
            let response = await axios({
                url: 'http://localhost:8080/api/menu/id?id=' + id,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200) {
                this.menu = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @observable menus = [];
    @action
    async getMenus() {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/menu',
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200 && response.data !== '') {
                this.menus = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }
}

export default MenuStore.getInstance();
