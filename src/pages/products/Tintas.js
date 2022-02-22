import React, { useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Salvar, Dados, Select, Svg, Header, Title, User, Label, Input, RedesSociais, Rede, Sidebar, Viwer, Painel, ButtonSidebar, Logout, Grid, InfoProducts, SelectDados, Icons, Dado} from "../style-components";

import { ReactComponent as ImgTinta } from "../../images/Tinta.svg";
import { ReactComponent as Background } from "../../images/Background.svg";
import { ReactComponent as IconFacebook } from "../../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../../images/IconLinkedin.svg";
import { ReactComponent as IconEdit } from "../../images/IconEdit.svg";
import { ReactComponent as IconDelete } from "../../images/IconDelete.svg";

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
const IconStyle = {
	paddingLeft: "10px",
};

export default function Tintas() {
	const ProductTypeId = "3";
	const size = null;
	const liters = null;
	const usability = null;
	const [name, setNome] = useState("");
	const [type, setTipo] = useState("");
	const [amount, setQuantidade] = useState("");

	const navigate = useNavigate();
	
	function AddTintas() {
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
			{/* {nome?.map((nome) => (
                
            ))} */}
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
					<a href="/Fotolito">
						<ButtonSidebar>Fotolito</ButtonSidebar>
					</a>
					<a href="/Chapas">
						<ButtonSidebar>Chapas</ButtonSidebar>
					</a>
					<a href="/Tintas">
						<ButtonSidebar style={ColorWhiteStyle}>Tintas</ButtonSidebar>
					</a>
					<a href="/Quimicos">
						<ButtonSidebar>Quimicos</ButtonSidebar>
					</a>
					<a href="/">
						<Logout value="LOGOUT" placeholder="LOGOUT" />
					</a>
				</Sidebar>
				<Viwer>
					<h3>Tintas</h3>
					<Grid>
						<InfoProducts>
							<ImgTinta />
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Nome
									</Label>
									<Input  onChange={(e) => setNome(e.target.value)} required type="text" placeholder="Nome do fotolito" />
								</div>
								<br />
								<div>
									<Label style={LabelStyle} color="white">
										Tipo
									</Label>
									<Select  onChange={(e) => setTipo(e.target.value)} name="litragem">
										<option required selected disabled>
											Selecione
										</option>
										<option value="Verão">verão</option>
										<option value="Inverno">inverno</option>
									</Select>
								</div>
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Quantidade
									</Label>
									<Input onChange={(e) => setQuantidade(e.target.value)} required style={InputStyle} type="number" placeholder="Quantidade de filmes" />
								</div>
								<div style={divStyle}>
									<Salvar onClick={AddTintas} value="SALVAR" placeholder="SALVAR" />
								</div>
						</InfoProducts>
						<InfoProducts>
							<form>
								<SelectDados>
									<Dados>
										Nome - tipo - quantidade
										<Icons>
											<IconEdit style={IconStyle} />
											<IconDelete style={IconStyle} />
										</Icons>
									</Dados>
									<Dados>
										Nome - tipo - quantidade
										<Icons>
											<a href="">
												<IconEdit style={IconStyle} />
											</a>
											<IconDelete style={IconStyle} />
										</Icons>
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
