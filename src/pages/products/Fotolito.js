import React, { useEffect, useState } from "react";
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
							<form action="/menu">
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Nome
									</Label>
									<Input required type="text" placeholder="Nome do fotolito" />
								</div>
								<br />
								<div>
									<Label style={LabelStyle} color="white">
										Litragem
									</Label>
									<Select name="litragem">
										<option required selected disabled>
											Selecione
										</option>
										<option value="20 LTS">20 Litros</option>
										<option value="18 LTS">18 Litros</option>
										<option value="5 LTS">5 Litros</option>
									</Select>
								</div>
								<div style={divStyle}>
									<Label style={LabelStyle} color="white">
										Quantidade
									</Label>
									<Input required style={InputStyle} type="number" placeholder="Quantidade de filmes" />
								</div>
								<div style={divStyle}>
									<Salvar value="SALVAR" placeholder="SALVAR" />
								</div>
							</form>
						</InfoProducts>
						<InfoProducts>
							<form>
								<SelectDados>
									<Dados>Nome - Tipo - Quantidade</Dados>
									<Dados>Nome - Tipo - Quantidade</Dados>
								</SelectDados>
							</form>
						</InfoProducts>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
