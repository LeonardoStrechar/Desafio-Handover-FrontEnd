import React, { useEffect, useState } from "react";
import { Dados, Select, Svg, Header, Title, User, Label, Input, RedesSociais, Rede, Sidebar, Viwer, Painel, ButtonSidebar, Logout, Grid, InfoProducts, SelectDados, Salvar } from "../style-components";

import { ReactComponent as ImgChapa } from "../../images/Chapas.svg";
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

export default function Chapas() {
	//const [nome, setNome] = useState([]);

	// useEffect(() => {
	//     api.get("login").then(({data}) => {
	//         setNome(data);
	//     })
	//     console.log(nome);

	//     //eslint-disable-next-link react-hooks/exhaustive-deps
	// }, []);
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
						<ButtonSidebar style={ColorWhiteStyle}>Chapas</ButtonSidebar>
					</a>
					<a href="/Tintas">
						<ButtonSidebar>Tintas</ButtonSidebar>
					</a>
					<a href="/Quimicos">
						<ButtonSidebar>Quimicos</ButtonSidebar>
					</a>
					<a href="/">
						<Logout value="LOGOUT" placeholder="LOGOUT" />
					</a>
				</Sidebar>
				<Viwer>
					<h3>Chapas</h3>
					<Grid>
						<InfoProducts>
							<ImgChapa />
							<form action="/menu">
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Código
									</Label>
									<Input required type="number" placeholder="Insira o código da chapa" />
								</div>
								<br />
								<div>
									<Label style={LabelStyle} color="white">
										Tamanho
									</Label>
									<Select name="tamanho">
										<option required selected disabled>
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
									<Input required style={InputStyle} type="number" placeholder="Quantidade de chapas" />
								</div>
								<div style={divStyle}>
									<Salvar value="SALVAR" placeholder="SALVAR" />
								</div>
							</form>
						</InfoProducts>
						<InfoProducts>
							<form>
								<SelectDados>
									<Dados>Cod - Tamanho - Quantidade</Dados>
									<Dados>Cod - Tamanho - Quantidade</Dados>
								</SelectDados>
							</form>
						</InfoProducts>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
