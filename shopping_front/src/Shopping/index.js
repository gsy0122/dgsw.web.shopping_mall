import React, {Component} from 'react';
import './Shopping.scss';
import MenuBar from "../Menu/MenuBar";
import ShoppingView from "./ShoppingView";

class Shopping extends Component {
    render() {
        return (
            <div>
                <MenuBar/>
                <ShoppingView/>
            </div>
        );
    }
}

export default Shopping;