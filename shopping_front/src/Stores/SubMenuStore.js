import { observable, action } from 'mobx';
import axios from 'axios';

class SubMenuStore {
    static __instance = null;
    static getInstance() {
        if (SubMenuStore.__instance === null) {
            SubMenuStore.__instance = new SubMenuStore();
        }
        return SubMenuStore.__instance;
    }
    constructor() {
        SubMenuStore.__instance = this;
    }

    @observable subMenu = null;
    @action getSubMenu = async (id) => {
        try {
            this.subMenu = null;
            let response = await axios({
                url: 'http://localhost:8080/api/subMenu/id?id=' + id,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200) {
                this.subMenu = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @observable subMenus = [];
    @action
    async getSubMenusByMenu(menuId) {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/subMenu/menuId?menuId=' + menuId,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200 && response.data !== '') {
                this.subMenus = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }
}

export default SubMenuStore.getInstance();
