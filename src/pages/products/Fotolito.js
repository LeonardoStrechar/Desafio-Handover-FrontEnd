import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { read_cookie } from "sfcookies";
import axios from "axios";
import Card from "../components/card";
import { Salvar, Dados, Select, Svg, Header, Title, User, Label, Input, RedesSociais, Rede, Sidebar, Viwer, Painel, ButtonSidebar, Logout, Grid, InfoProducts, SelectDados } from "../style-components";

import { ReactComponent as ImgFotolito } from "../../images/Fotolito.svg";
import { ReactComponent as Background } from "../../images/Background.svg";
import { ReactComponent as IconFacebook } from "../../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../../images/IconLinkedin.svg";


const divStyle = {
	position: "relative",
	paddingTop: "20px",
};
const LabelStyle = {
	position: "relative",
	padding: "10px",
};
const InputStyle = {
	position: "relative",
	width: "80px",
	margin: "10px 50px 20px 0",
};
const ColorWhiteStyle = {
	background: "green",
	color: "white",
};
const ButtonMenuStyle = {
	textAlign: "center",
	fontSize: "18px",
};

export default function Fotolito() {
	const ProductTypeId = "1";
	const size = null;
	const type = null;
	const usability = null;
	const [name, setNome] = useState("");
	const [liters, setLitragem] = useState("");
	const [amount, setQuantidade] = useState("");

	const navigate = useNavigate();
	
	const [fotolito, setFotolito] = useState([]);
	const authorization = read_cookie("authorization");
	
	useEffect(() => {
			axios.get("http://localhost:3001/products/", {
				headers: {
					'authorization': `Bearer ${authorization}` 
				}
			}, {
				type: ProductTypeId,
			})
			.then((response) => {
				console.log("deu certo aa");
				setFotolito(response.data);
				
			}).catch(() => {
				console.log("Não foi possivel realizar cadastro!");
			});

			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	//console.log(fotolito.products)
	const produtos = fotolito.products
	//console.log(produtos)

	function AddFotolito() {
		const authorization = read_cookie("authorization");
		axios.post("http://localhost:3001/products/", {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		}, {
			name: name,
			amount: amount,
			typeId: ProductTypeId,
			liters: liters,
			size: size,
			type: type,
			usability: usability,
		})
		.then(() => {
			alert("Item adicionado com sucesso!");
			navigate("/menu");
		})
		.catch(() => {
			alert("Não foi possivel realizar cadastro!");
		});
	}
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
						</Rede>
						<Rede>
							<a href="https://www.instagram.com/leonardo_strechar/" target="_blank">
								<IconInstagram />
							</a>
						</Rede>
						<Rede>
							<a href="https://www.linkedin.com/in/leonardo-strechar-a9875a1ab/" target="_blank">
								<IconLinkedin />
							</a>
						</Rede>
					</RedesSociais>
				</Header>
			</div>
			<Painel>
				<Sidebar>
					<a href="/menu">
						<ButtonSidebar style={ButtonMenuStyle}>Início</ButtonSidebar>
					</a>
					<Title fontSize={20}>PRODUTOS</Title>
					<a href="/fotolito">
						<ButtonSidebar style={ColorWhiteStyle}>Fotolito</ButtonSidebar>
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
					<a href="/">
						<Logout value="LOGOUT" placeholder="LOGOUT" />
					</a>
				</Sidebar>
				<Viwer>
					<h3>Fotolito</h3>
					<Grid>
						<InfoProducts>
							<ImgFotolito />
							{/* <form action="/menu"> */}
							<div style={divStyle}>
								<Label style={LabelStyle} color="white">
									Nome
								</Label>
								<Input onChange={(e) => setNome(e.target.value)} required type="text" placeholder="Nome do fotolito" />
							</div>
							<br />
							<div>
								<Label style={LabelStyle} color="white">
									Litragem
								</Label>
								<Select onChange={(e) => setLitragem(e.target.value)} name="litragem">
									<option required selected disabled>
										Selecione
									</option>
									<option value="20">20 Litros</option>
									<option value="18">18 Litros</option>
									<option value="5">5 Litros</option>
								</Select>
							</div>
							<div style={divStyle}>
								<Label style={LabelStyle} color="white">
									Quantidade
								</Label>
								<Input onChange={(e) => setQuantidade(e.target.value)} required style={InputStyle} type="number" placeholder="Quantidade de filmes" />
							</div>
							<div style={divStyle}>
								<Salvar onClick={AddFotolito} value="SALVAR" placeholder="SALVAR" />
							</div>
							{/* </form> */}
						</InfoProducts>
						<InfoProducts>
							<form>
								<SelectDados>
									<Dados>Nome - Tipo - Quantidade</Dados>
									<Card></Card>
									<Dados>
										{produtos?.map((info) => (
											<h1>{info.id}</h1>
											
										))}
									</Dados>
								</SelectDados>
							</form>
						</InfoProducts>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
