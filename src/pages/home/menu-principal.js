import React, { useEffect, useState } from "react";
import { read_cookie, delete_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardMenu from "../components/card-menu";
import HeaderT from "../components/header";
import { Svg, Title, Sidebar, Viwer, Painel, ButtonSidebar, Logout, Grid, InfoTable, InfoTitle, InfoRequest } from "../style-components";

import { ReactComponent as Background } from "../../images/Background.svg";

const LogoutStyle = {
	top: "290px",
};

export default function MenuPrincipal() {
	const navigate = useNavigate();
	const authorization = read_cookie("authorization");
	const [fotolitos, setFotolito] = useState([]);
	const [chapas, setChapas] = useState([]);
	const [tintas, setTinta] = useState([]);
	const [quimicos, setQuimico] = useState([]);


// função para deslogar	
	function FunctionLogout(){
		delete_cookie("authorization");
		navigate("/");
	}

// função get fotolito
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=fotolito', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			console.log("deu certo fotolito");
			setFotolito(response.data);
		}).catch(() => {
			console.log("no fotolito");
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

// função get chapa
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Chapa', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			console.log("deu certo chapa");
			setChapas(response.data);
		}).catch(() => {
			console.log("no chapa");
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

// função get tinta
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Tinta', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			console.log("deu certo tinta");
			setTinta(response.data);
		}).catch(() => {
			console.log("no tinta");
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

// função get quimicos
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Quimicos', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			console.log("deu certo quimico");
			setQuimico(response.data);
		}).catch(() => {
			console.log("no quimico");
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	const fotolito = fotolitos.products
	const chapa = chapas.products
	const tinta = tintas.products
	const quimico = quimicos.products

	console.log(quimico);


	return (
		<div>
			<Svg>
				<Background />
			</Svg>
			<div>
				<HeaderT/>
			</div>
			<Painel>
				<Sidebar>
					<Title fontSize={20}>SETORES</Title>
					<a href="/fotolito">
						<ButtonSidebar>Fotolito</ButtonSidebar>
					</a>
					<a href="/chapas">
						<ButtonSidebar>Chapas</ButtonSidebar>
					</a>
					<a href="/tintas">
						<ButtonSidebar>Tintas</ButtonSidebar>
					</a>
					<a href="/quimicos">
						<ButtonSidebar>Quimicos</ButtonSidebar>
					</a>
					<Logout onClick={FunctionLogout} >LOGOUT</Logout>
				</Sidebar>
				<Viwer>
					<h3>Estoque</h3>
					<Grid>
						<InfoTable background="white">
							<InfoTitle>FOTOLITO</InfoTitle>
							<br />
							<InfoRequest>Estoque /Litros  / Quantidade</InfoRequest>
							{fotolito?.map((info) => (
								<CardMenu name={info.name} tipo={info.liters} quantidade={info.amount} />
							))}

						</InfoTable>
						<InfoTable background="white">
							<InfoTitle>CHAPAS</InfoTitle>
							<br />
							<InfoRequest>Estoque /Tamanho  / Quantidade</InfoRequest>
							{chapa?.map((info) => (
								<CardMenu name={info.name} tipo={info.size} quantidade={info.amount} />
							))}
						</InfoTable>
					</Grid>
					<Grid>
						<InfoTable background="white">
							<InfoTitle>TINTAS</InfoTitle>
							<br />
							<InfoRequest>Estoque /Tipo  / Quantidade</InfoRequest>
							{tinta?.map((info) => (
								<CardMenu name={info.name} tipo={info.type} quantidade={info.amount} />
							))}
						</InfoTable>
						<InfoTable background="white">
							<InfoTitle>QUIMICOS</InfoTitle>
							<br />
							<InfoRequest>Estoque /Usabilidade  / Quantidade</InfoRequest>
							{quimico?.map((info) => (
								<CardMenu name={info.name} tipo={info.usability} quantidade={info.amount} />
							))}
						</InfoTable>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
