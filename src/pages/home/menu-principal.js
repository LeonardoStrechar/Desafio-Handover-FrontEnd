import React, { useEffect, useState } from "react";
import { read_cookie, delete_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/card";
import { Svg, Header, Title, User, RedesSociais, Rede, Sidebar, Viwer, Painel, ButtonSidebar, Logout, Grid, InfoTable, InfoRespose, InfoTitle, InfoRequest, Infos } from "../style-components";

import { ReactComponent as Background } from "../../images/Background.svg";
import { ReactComponent as IconFacebook } from "../../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../../images/IconLinkedin.svg";

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


	return (
		<div>
			<Svg>
				<Background />
			</Svg>
			<div>
				<Header>
					<User fontSize={16}>Bem vindo, Leonardo strechar</User>
					<Title fontSize={20}>HandOver </Title>
					<RedesSociais>
						<Rede>
							<a href="https://www.facebook.com/leonardo.strechar.1" target="_blank">
								<IconFacebook />
							</a>
							<Rede></Rede>
							<a href="https://www.instagram.com/leonardo_strechar/" target="_blank">
								<IconInstagram />
							</a>
							<Rede></Rede>
							<a href="https://www.linkedin.com/in/leonardo-strechar-a9875a1ab/" target="_blank">
								<IconLinkedin />
							</a>
						</Rede>
					</RedesSociais>
				</Header>
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
							<InfoRequest>Estoque</InfoRequest>
							<InfoRespose>120</InfoRespose>

							{fotolito?.map((info) => (
								<Card name={info.name} tipo={info.liters} quantidade={info.amount} />
							))}

						</InfoTable>
						<InfoTable background="white">
							<InfoTitle>CHAPAS</InfoTitle>
							<br />
							<InfoRequest>Estoque</InfoRequest>
							<InfoRespose>120</InfoRespose>
						</InfoTable>
					</Grid>
					<Grid>
						<InfoTable background="white">
							<InfoTitle>TINTAS</InfoTitle>
							<br />
							<InfoRequest>Estoque</InfoRequest>
							<InfoRespose>120</InfoRespose>
						</InfoTable>
						<InfoTable background="white">
							<InfoTitle>QUIMICOS</InfoTitle>
							<br />
							<InfoRequest>Estoque</InfoRequest>
							<InfoRespose>120</InfoRespose>
						</InfoTable>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
