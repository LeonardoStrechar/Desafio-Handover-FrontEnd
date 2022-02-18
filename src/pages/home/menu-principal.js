import React, { useEffect, useState } from "react";
import { Svg, Header, Title, User, RedesSociais, Rede, Sidebar, Viwer, Painel, ButtonSidebar, Logout, Grid, InfoTable, InfoRespose, InfoTitle, InfoRequest, Infos } from "../style-components";
import api from "../../services/api";

import { ReactComponent as Background } from "../../images/Background.svg";
import { ReactComponent as IconFacebook } from "../../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../../images/IconLinkedin.svg";

const LogoutStyle = {
	top: "290px",
};

export default function MenuPrincipal() {
	const [nome, setNome] = useState([]);

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
					<a href="/">
						<Logout style={LogoutStyle} value="LOGOUT" placeholder="LOGOUT" />
					</a>
				</Sidebar>
				<Viwer>
					<h3>Estoque</h3>
					<Grid>
						<InfoTable background="white">
							<InfoTitle>FOTOLITO</InfoTitle>
							<br />
							<InfoRequest>Estoque</InfoRequest>
							<InfoRespose>120</InfoRespose>
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
