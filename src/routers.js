import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { authentication } from './auth';
import MenuPrincipal from './pages/admin/menu-principal';
import Login from './pages/login';

const PrivateRoute =  ({ element: Element, ...rest}) => (
    <Route { ...rest } element={props => (
        authentication() ? (
            <Element {... props} />
            ) : (
            <Navigate to={{ pathname: '/', state: { from: props.location} }} />
            )
        )} 
    />
);

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/menu" element={<MenuPrincipal />} />
            {/* <PrivateRoute path="/menu" element={<MenuPrincipal/>}/> */}

            {/* <Route path='/menu' element={<MenuPrincipal/>} render= /> */}
            {/* <PrivateRoute path="/menu-principal" element={() => <MenuPrincipal/> } /> */}
        </Routes>
    </BrowserRouter>
);

export default Rotas;