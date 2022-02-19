import React, { useEffect, useState } from "react";
import { Container, Label, Table, Title, Border, RedesSociais, Rede, SubTitle, Svg, Input, Button, ButtonLogin, Link } from "./style-components";
import { ReactComponent as Background } from "../images/Background.svg";
import { ReactComponent as IconFacebook } from "../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../images/IconLinkedin.svg";

export default function Register() {
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
					<Title fontSize={23}>Preencha os campos</Title>
					<form action="/">
						<Border>
							<Table padding={30}>
								<Label color="white">Nome</Label>
								<br />
								<Input type="text" required placeholder="Digite seu nome completo" />
								<br />
								<Label color="white">E-mail</Label>
								<br />
								<Input type="email" required placeholder="Digite seu email" />
								<br />
								<Label color="white">Senha</Label>
								<br />
								<Input type="password" required placeholder="Digite sua senha" />
								<br />
							</Table>
							<ButtonLogin type="submit" value="CADASTRE-SE" placeholder="CADASTRE-SE" />
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
}
