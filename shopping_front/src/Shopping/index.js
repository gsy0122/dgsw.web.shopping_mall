import React, {Component} from 'react';
import './Shopping.scss';
import ShoppingView from "./ShoppingView";
import MenuTopBar from "../Menu/MenuTopBar";

class Shopping extends Component {
    render() {
        return (
            <div>
                <MenuTopBar/>
                <ShoppingView/>
            </div>
        );
    }
}

export default Shopping;