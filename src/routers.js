import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { read_cookie } from "sfcookies";

import MenuPrincipal from "./pages/home/menu-principal";
import Login from "./pages/login";
import Register from "./pages/register";
import Fotolito from "./pages/products/Fotolito";
import Chapas from "./pages/products/Chapas";
import Tintas from "./pages/products/Tintas";
import Quimicos from "./pages/products/Quimicos";

function useAuth() {
	const token = read_cookie("authorization");
	console.log(token);
	 
	if( token.length <= 0){
	 	console.log("menor que 0");
		return false;	}
	else {
	 	console.log("maior que 0");
		return true;
	}
};

function PrivateRoute({ children }) {
	console.log(useAuth());
	const auth = useAuth();
    return auth ? children : <Navigate to="/" /> ;
};

export default function Rotas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Cadastro" element={<Register />} />
				<Route path="/fotolito" element={<Fotolito />} />
				<Route path="/chapas" element={<Chapas />} />
				<Route path="/quimicos" element={<Quimicos />} />

				<Route path="/tintas" element={
					<PrivateRoute>
						<Tintas />
					</PrivateRoute>
				} />

				<Route path="/menu" element={
					<PrivateRoute>
						<MenuPrincipal />
					</PrivateRoute>
				} />
			</Routes>
		</BrowserRouter>
	);
}
