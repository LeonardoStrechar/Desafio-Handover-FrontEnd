import React, { useEffect, useState } from "react";
import { read_cookie, delete_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/card";
import HeaderT from "../components/header";
import { Salvar, Dados, Select, Svg, Title, Label, Input, Sidebar, Viwer, Painel, ButtonSidebar, Logout, Grid, InfoProducts, SelectDados } from "../style-components";

import { ReactComponent as ImgQuimicos } from "../../images/Quimicos.svg";
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

export default function Quimicos() {
	const ProductTypeId = "4";
	const size = null;
	const type = null;
	const liters = null;
	const [name, setNome] = useState("");
	const [amount, setQuantidade] = useState("");
	const [usability, setUsability] = useState("");

	const navigate = useNavigate();

	const [quimico, setQuimico] = useState([]);
	const authorization = read_cookie("authorization");
	
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Quimicos', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			console.log("deu certo aa");
			setQuimico(response.data);
			
		}).catch(() => {
			console.log("Não foi possivel realizar cadastro!");
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

	const quimicos = quimico.products
	//console.log(quimicos);
	
	function AddQuimicos() {
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
				'authorization': `Bearer ${authorization}` 
			},
		})
		.then(() => {
			alert("Item adicionado com sucesso!");
			navigate("/menu");
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
						<ButtonSidebar>Chapas</ButtonSidebar>
					</a>
					<a href="/Tintas">
						<ButtonSidebar>Tintas</ButtonSidebar>
					</a>
					<a href="/Quimicos">
						<ButtonSidebar style={ColorWhiteStyle}>Quimicos</ButtonSidebar>
					</a>
					<Logout onClick={FunctionLogout} >LOGOUT</Logout>
				</Sidebar>
				<Viwer>
					<h3>Quimicos</h3>
					<Grid>
						<InfoProducts>
							<ImgQuimicos />
							
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Nome
									</Label>
									<Input onChange={(e) => setNome(e.target.value)} required type="text" placeholder="Nome do fotolito" />
								</div>
								<br />
								<div>
									<Label style={LabelStyle} color="white">
										Usabilidade
									</Label>
									<Select onChange={(e) => setUsability(e.target.value)} name="usabilidade">
										<option required defaultValue disabled>
											Selecione
										</option>
										<option value="Solução de forno">Solução de forno</option>
										<option value="Revelador">Revelador</option>
										<option value="Corretivo">Corretivo</option>
										<option value="Anti-Misting">Anti-Misting</option>
									</Select>
								</div>
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Quantidade
									</Label>
									<Input onChange={(e) => setQuantidade(e.target.value)} required style={InputStyle} type="number" placeholder="Quantidade de filmes" />
								</div>
								<div style={divStyle}>
									<Salvar onClick={AddQuimicos} value="SALVAR" placeholder="SALVAR" />
								</div>
							
						</InfoProducts>
						<InfoProducts>
							<form>
								<SelectDados overflow="scroll">
									<Dados>Nome - tipo - quantidade</Dados>
									{quimicos?.map((info) => (
											<Card name={info.name} tipo={info.usability} quantidade={info.amount} />
										))}
								</SelectDados>
							</form>
						</InfoProducts>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
