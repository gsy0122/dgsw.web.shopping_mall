import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";

import Shopping from './Shopping';
import Profile from './Profile';
import Menu from "./Menu";
import Product from "./Product";

import Stores from './Stores';

import './App.scss';
import Cart from "./Cart";

const App = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menu-bar'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/profile'>프로필</Link></li>
                    <li><Link to='/'>고객센터</Link></li>
                    <li><Link to='/cart'>장바구니</Link></li>
                    <li><Link to='/'>배송조회</Link></li>
                    <li><Link to='/'>마일리지</Link></li>
                    <li><Link to='/'>이용안내</Link></li>
                </ul>
            </header>
            <section className='app-body'>
                <Route path='/' exact component={Shopping}/>
                <Route path='/profile/:command?' exact component={Profile}/>
                <Route path='/cart' exact component={Cart}/>
                <Route path='/menu/:menuId/:subMenuId?' exact component={Menu}/>
                <Route path='/view/:productId' exact component={Product}/>
            </section>
        </BrowserRouter>
    </Provider>
);

export default App;
