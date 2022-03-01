import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { read_cookie, delete_cookie } from "sfcookies";
import axios from "axios";
import Card from "../components/card";
import HeaderT from "../components/header";
import { Dados, Select, Svg, Title, Label, Input, Sidebar, Viwer, Painel, ButtonSidebar, Logout, Grid, InfoProducts, SelectDados, Salvar } from "../style-components";

import { ReactComponent as ImgChapa } from "../../images/Chapas.svg";
import { ReactComponent as Background } from "../../images/Background.svg";

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

export default function Chapas() {
	const ProductTypeId = "2";
	const [size, setTamanho] = useState("");
	const type = null;
	const usability = null;
	const [name, setNome] = useState("");
	const liters = null;
	const [amount, setQuantidade] = useState("");

	const navigate = useNavigate();

	const [chapas, setChapas] = useState([]);
	const authorization = read_cookie("authorization");
	
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Chapa', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			console.log("deu certo aa");
			setChapas(response.data);
			
		}).catch(() => {
			console.log("Não foi possivel realizar cadastro!");
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
	const chapa = chapas.products
	console.log(chapa);
	
	function AddChapas() {
		const authorization = read_cookie("authorization");
		axios.post("http://localhost:3001/products/", {
			name: name,
			amount: amount,
			typeId: ProductTypeId,
			liters: liters,
			size: size,
			type: type,
			usability: usability,
		}, {
			headers: {
				'Authorization': `Bearer ${authorization}` 
			},
		})
		.then(() => {
			alert("Item adicionado com sucesso!");
			
		})
		.catch(() => {
			alert("Não foi possivel realizar cadastro!");
		});
	}

	function FunctionLogout(){
		delete_cookie("authorization");
		navigate("/menu");
	}
	
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
					<a href="/menu">
						<ButtonSidebar style={ButtonMenuStyle}>Início</ButtonSidebar>
					</a>
					<Title fontSize={20}>PRODUTOS</Title>
					<a href="/Fotolito">
						<ButtonSidebar>Fotolito</ButtonSidebar>
					</a>
					<a href="/Chapas">
						<ButtonSidebar style={ColorWhiteStyle}>Chapas</ButtonSidebar>
					</a>
					<a href="/Tintas">
						<ButtonSidebar>Tintas</ButtonSidebar>
					</a>
					<a href="/Quimicos">
						<ButtonSidebar>Quimicos</ButtonSidebar>
					</a>
					<Logout onClick={FunctionLogout} >LOGOUT</Logout>
				</Sidebar>
				<Viwer>
					<h3>Chapas</h3>
					<Grid>
						<InfoProducts>
							<ImgChapa />
							
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Código
									</Label>
									<Input onChange={(e) => setNome(e.target.value)} required type="number" placeholder="Insira o código da chapa" />
								</div>
								<br />
								<div>
									<Label style={LabelStyle} color="white">
										Tamanho
									</Label>
									<Select onChange={(e) => setTamanho(e.target.value)} required name="tamanho">
										<option required defaultValue disabled>
											Selecione
										</option>
										<option value="1x1">1x1 m</option>
										<option value="2x2">2x2 m</option>
										<option value="3x3">3x3 m</option>
									</Select>
								</div>
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Quantidade
									</Label>
									<Input onChange={(e) => setQuantidade(e.target.value)} required style={InputStyle} type="number" placeholder="Quantidade de chapas" />
								</div>
								<div style={divStyle}>
									<Salvar onClick={AddChapas} value="SALVAR" placeholder="SALVAR" />
								</div>
							
						</InfoProducts>
							<InfoProducts>
									<SelectDados overflow="scroll">
										<Dados>Código - Tamanho - Quantidade</Dados>
										{chapa?.map((info) => (
												<Card name={info.name} tipo={info.size} quantidade={info.amount} />
											))}
									</SelectDados>
							</InfoProducts>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
