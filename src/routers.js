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
	if( token.length <= 0){
		return false;	
	} else {
		return true;
	}
};

function PrivateRoute({ children }) {
	const auth = useAuth();
    return auth ? children : <Navigate to="/" /> ;
};

export default function Rotas() {
	return (
		<BrowserRouter>
			<Routes>
			{/* Rotas Públicas */}
				<Route path="/" element={<Login />} />
				<Route path="/Cadastro" element={<Register />} />

			{/* Rotas Privadas */}
				<Route path="/menu" element={
					<PrivateRoute>
						<MenuPrincipal />
					</PrivateRoute>
				} />

				<Route path="/tintas" element={
					<PrivateRoute>
						<Tintas />
					</PrivateRoute>
				} />

				<Route path="/fotolito" element={
					<PrivateRoute>
						<Fotolito />
					</PrivateRoute>
				} />

				<Route path="/chapas" element={
					<PrivateRoute>
						<Chapas />
					</PrivateRoute>
				} />

				<Route path="/quimicos" element={
					<PrivateRoute>
						<Quimicos />
					</PrivateRoute>
				} />
			</Routes>
		</BrowserRouter>
	);
}
