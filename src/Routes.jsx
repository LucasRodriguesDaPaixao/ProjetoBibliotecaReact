import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Paginas/Home/Home'
import Login from './Paginas/Login/Login'
import Cadastro from './Paginas/Cadastro/Cadastro'

function Routes(){
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/home' component={Home}/>
                <Route path='/cadastro' component={Cadastro}/>
            </Switch>
        </BrowserRouter>
        </>
    );
}

export default Routes;