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

export default function Rotas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Cadastro" element={<Register />} />
				<Route path="/fotolito" element={<Fotolito />} />
				<Route path="/chapas" element={<Chapas />} />
				<Route path="/tintas" element={<Tintas />} />
				<Route path="/quimicos" element={<Quimicos />} />

				<Route path="/menu" element={
					<PrivateRoute>
						<MenuPrincipal />
					</PrivateRoute>
				} />

			</Routes>
		</BrowserRouter>
	);
}
function useAuth() {
	const authorization = read_cookie("authorization");
	const tipo = authorization == undefined ? false : true;
	return tipo;
}

function PrivateRoute({ children }) {
	console.log(useAuth());
	const auth = useAuth();
    return auth ? children : <Navigate to="/chapas" /> ;
}
