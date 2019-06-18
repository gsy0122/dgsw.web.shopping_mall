import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";

import Shopping from './Shopping';
import Profile from './Profile';

import Stores from './Stores';

import './App.scss';

const App = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menu-bar'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/profile'>프로필</Link></li>
                </ul>
            </header>
            <section className='app-body'>
                <Route path='/' exact component={Shopping}/>
                <Route path='/profile/:command?' exact component={Profile}/>
            </section>
        </BrowserRouter>
    </Provider>
);

export default App;
