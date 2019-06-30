import React, {Component} from 'react';

import './Product.scss';
import ProductView from "./ProductView";

class Product extends Component {
    render() {
        return (
            <ProductView id={this.props.match.params.productId}/>
        );
    }
}

export default Product;