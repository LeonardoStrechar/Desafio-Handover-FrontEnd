import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Container, Label, Table, Title, Border, RedesSociais, Rede, SubTitle, Svg, Input, ButtonLogin } from "./style-components";
import { ReactComponent as Background } from "../images/Background.svg";
import { ReactComponent as IconFacebook } from "../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../images/IconLinkedin.svg";
import axios from "axios";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function Register() {
		axios.post("http://localhost:3001/register", {
			name: name,
			email: email,
			password: password,
		})
		.then((response) => {
			alert("PARABÉNS!!! você foi cadastrado com sucesso.")
			navigate("/");
		})
		.catch(() => {
			alert("Não foi possivel realizar seu cadastro!");
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
					<Title fontSize={23}>Preencha os campos</Title>

					<Border>
						<Table padding={30}>
							<Label color="white">Nome</Label>
							<br />
							<Input onChange={(e) => setName(e.target.value)} type="text" required placeholder="Digite seu nome completo" />
							<br />
							<Label color="white">E-mail</Label>
							<br />
							<Input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Digite seu email" />
							<br />
							<Label color="white">Senha</Label>
							<br />
							<Input onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Digite sua senha" />
							<br />
						</Table>
						<ButtonLogin onClick={Register} type="submit" value="CADASTRE-SE" placeholder="CADASTRE-SE" />
						<Title fontSize={15}>OU</Title>
						<Title fontSize={15}>
							<Link href="/">Fazer login</Link>
						</Title>
						<RedesSociais>
							<Rede>
								<a href="https://www.facebook.com/leonardo.strechar.1" target="_blank" rel="noreferrer">
									<IconFacebook />
								</a>
								<Rede></Rede>
								<a href="https://www.instagram.com/leonardo_strechar/" target="_blank" rel="noreferrer">
									<IconInstagram />
								</a>
								<Rede></Rede>
								<a href="https://www.linkedin.com/in/leonardo-strechar-a9875a1ab/" target="_blank" rel="noreferrer">
									<IconLinkedin />
								</a>
							</Rede>
						</RedesSociais>
					</Border>
				</div>
			</Container>
		</div>
	);
}
