import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { authentication } from "./auth";
import MenuPrincipal from "./pages/home/menu-principal";
import Login from "./pages/login";
import Fotolito from "./pages/products/Fotolito";
import Chapas from "./pages/products/Chapas";
import Tintas from "./pages/products/Tintas";
import Quimicos from "./pages/products/Quimicos";

const PrivateRoute = ({ element: Element, ...rest }) => (
	<Route {...rest} element={(props) => (authentication() ? <Element {...props} /> : <Navigate to={{ pathname: "/", state: { from: props.location } }} />)} />
);

const Rotas = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/menu" element={<MenuPrincipal />} />
			<Route path="/fotolito" element={<Fotolito />} />
			<Route path="/chapas" element={<Chapas />} />
			<Route path="/tintas" element={<Tintas />} />
			<Route path="/quimicos" element={<Quimicos />} />
			{/* <PrivateRoute path="/menu" element={<MenuPrincipal/>}/> */}

			{/* <Route path='/menu' element={<MenuPrincipal/>} render= /> */}
			{/* <PrivateRoute path="/menu-principal" element={() => <MenuPrincipal/> } /> */}
		</Routes>
	</BrowserRouter>
);

export default Rotas;
