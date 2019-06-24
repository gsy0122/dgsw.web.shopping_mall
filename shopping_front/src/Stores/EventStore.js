import { observable, action } from 'mobx';
import axios from 'axios';

class EventStore {
    static __instance = null;
    static getInstance() {
        if (EventStore.__instance === null) {
            EventStore.__instance = new EventStore();
        }
        return EventStore.__instance;
    }
    constructor() {
        EventStore.__instance = this;
    }

    @observable event = null;
    @action getEvent = async (id) => {
        try {
            this.event = null;
            let response = await axios({
                url: 'http://localhost:8080/api/event/id?id=' + id,
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200) {
                this.event = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }

    @observable events = [];
    @action
    async getEvents() {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/event',
                method: 'get',
                headers : {
                    'Content-type': 'application/json; charset=utf-8'
                },
                timeout: 3000
            });
            console.log(response);
            if (response.status === 200 && response.data !== '') {
                this.events = response.data;
            }
        } catch (e) {
            alert(e.toLocaleString());
        }
    }
}

export default EventStore.getInstance();
