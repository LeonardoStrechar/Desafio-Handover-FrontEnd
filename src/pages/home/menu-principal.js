import React, { useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
import axios from "axios";
import CardMenu from "../components/card-menu";
import HeaderT from "../components/header";
import Sidebar from "../components/sidebar";
import { Svg, Viwer, Painel, Grid, InfoTable, InfoTitle, InfoRequest } from "../style-components";

import { ReactComponent as Background } from "../../images/Background.svg";

export default function MenuPrincipal() {
	const [fotolitos, setFotolito] = useState([]);
	const [chapas, setChapas] = useState([]);
	const [tintas, setTinta] = useState([]);
	const [quimicos, setQuimico] = useState([]);


// função get fotolito
	useEffect(() => {
		const authorization = read_cookie("authorization");
		axios.get('http://localhost:3001/products/?type=fotolito', {
			headers: {
				authorization: `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			setFotolito(response.data);
		}).catch(() => {
			alert("Erro ao buscar os dados.")
		});
		
	}, [])

// função get chapa
	useEffect(() => {
		const authorization = read_cookie("authorization");
		axios.get('http://localhost:3001/products/?type=Chapa', {
			headers: {
				authorization: `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			setChapas(response.data);
		}).catch(() => {
			alert("Erro ao buscar os dados.")
		});
		
	}, [])

// função get tinta
	useEffect(() => {
		const authorization = read_cookie("authorization");
		axios.get('http://localhost:3001/products/?type=Tinta', {
			headers: {
				authorization: `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			setTinta(response.data);
		}).catch(() => {
			alert("Erro ao buscar os dados.")
		});
	}, [])

// função get quimicos
	useEffect(() => {
		const authorization = read_cookie("authorization");
		axios.get('http://localhost:3001/products/?type=Quimicos', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			setQuimico(response.data);
		}).catch(() => {
			alert("Erro ao buscar os dados.")
		});
		
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
				<HeaderT/>
			</div>
			<Painel>
				<Sidebar />
				<Viwer>
					<h3>MENU</h3>
					<Grid>
						<InfoTable background="white">
							<InfoTitle>FOTOLITO</InfoTitle>
							<br />
							<InfoRequest>Estoque / Litros / Quantidade</InfoRequest>
							{fotolito?.map((info) => (
								<CardMenu key={info.id} name={info.name} tipo={info.liters} quantidade={info.amount} />
							))}

						</InfoTable>
						<InfoTable background="white">
							<InfoTitle>CHAPAS</InfoTitle>
							<br />
							<InfoRequest>Estoque / Tamanho / Quantidade</InfoRequest>
							{chapa?.map((info) => (
								<CardMenu key={info.id} name={info.name} tipo={info.size} quantidade={info.amount} />
							))}
						</InfoTable>
					</Grid>
					<Grid>
						<InfoTable background="white">
							<InfoTitle>TINTAS</InfoTitle>
							<br />
							<InfoRequest>Estoque / Tipo / Quantidade</InfoRequest>
							{tinta?.map((info) => (
								<CardMenu key={info.id} name={info.name} tipo={info.type} quantidade={info.amount} />
							))}
						</InfoTable>
						<InfoTable background="white">
							<InfoTitle>QUIMICOS</InfoTitle>
							<br />
							<InfoRequest>Estoque / Usabilidade / Quantidade</InfoRequest>
							{quimico?.map((info) => (
								<CardMenu key={info.id} name={info.name} tipo={info.usability} quantidade={info.amount} />
							))}
						</InfoTable>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
