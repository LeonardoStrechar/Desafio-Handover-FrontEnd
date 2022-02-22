import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { bake_cookie } from "sfcookies";

import { Container, Label, Table, Title, Border, RedesSociais, Rede, SubTitle, Svg, Input, Button, ButtonLogin, Link } from "./style-components";
import { ReactComponent as Background } from "../images/Background.svg";
import { ReactComponent as IconFacebook } from "../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../images/IconLinkedin.svg";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function Login() {
		axios.post("http://localhost:3001/login", {
				email: email,
				password: password,
			})
			.then((response) => {
				bake_cookie("authorization", response.data.token);
				navigate("/menu");
			})
			.catch(() => {
				alert("Não foi possivel realizar seu Login, email ou senha incorreto!");
			});
	}

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
					{/* <form action="/menu"> */}
					<Border>
						<Table padding={30}>
							<Label color="white">E-mail</Label>
							<br />
							<Input onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Digite seu e-mail" />
							<br />
							<Label color="white">Senha</Label>
							<br />
							<Input onChange={(e) => setPassword(e.target.value)} required type="text" placeholder="Digite sua senha" />
							<br />
						</Table>
						<ButtonLogin onClick={Login} type="submit" value="ENTRAR" placeholder="ENTRAR" />
						<Title fontSize={15}>OU</Title>
						<Title fontSize={15}>
							<Link href="/Cadastro">CADASTRE-SE</Link>
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
					{/* </form> */}
				</div>
			</Container>
		</div>
	);
}
