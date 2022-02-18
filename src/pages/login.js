import React, { useEffect, useState } from "react";
import { Container, Label, Table, Title, Border, RedesSociais, Rede, SubTitle, Svg, Input, Button, ButtonLogin, Link } from "./style-components";
import { ReactComponent as Background } from "../images/Background.svg";
import { ReactComponent as IconFacebook } from "../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../images/IconLinkedin.svg";

const Login = () => {
	return (
		<div>
			<Svg>
				<Background />
			</Svg>
			<Container>
				<div>
					<Title fontSize={55}>HandOver</Title>
					<SubTitle fontSize={25}>Projeto Full-Stack</SubTitle>
				</div>
				<div>
					<Title fontSize={23}>Acesse seu armario</Title>
					<form action="/menu">
						<Border>
							<Table padding={30}>
								<Label color="white">Usuário</Label>
								<br />
								<Input type="text" placeholder="Digite seu usuário" />
								<br />
								<Label color="white">Senha</Label>
								<br />
								<Input type="password" placeholder="Digite sua senha" />
								<br />
							</Table>
							<ButtonLogin type="submit" value="ENTRAR" placeholder="ENTRAR" />
							<Title fontSize={15}>OU</Title>
							<Title fontSize={15}>
								<Link href="/">CADASTRE-SE</Link>
							</Title>
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
						</Border>
					</form>
				</div>
			</Container>
		</div>
	);
};
export default Login;
