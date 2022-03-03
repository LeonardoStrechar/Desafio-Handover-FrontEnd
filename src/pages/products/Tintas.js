import React, { useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
import axios from "axios";
import Card from "../components/card";
import HeaderT from "../components/header";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { Salvar, Dados, Select, Svg, Label, Input, Viwer, Painel, Grid, InfoProducts, SelectDados } from "../style-components";

import { ReactComponent as ImgTinta } from "../../images/Tinta.svg";
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

export default function Tintas() {
	const ProductTypeId = "3";
	const size = null;
	const liters = null;
	const usability = null;
	const [name, setNome] = useState("");
	const [type, setTipo] = useState("");
	const [amount, setQuantidade] = useState("");

	const navigate = useNavigate();

	const [tintas, setTinta] = useState([]);
	const authorization = read_cookie("authorization");
	
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Tinta', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			console.log("deu certo aa");
			setTinta(response.data);
			
		}).catch(() => {
			console.log("Não foi possivel realizar cadastro!");
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
	const tinta = tintas.products
	console.log(tintas);
	
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
			<div>
				<HeaderT/>
			</div>
			<Painel>
				<Sidebar></Sidebar>
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
										<option required defaultValue disabled>
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
								<SelectDados overflow="scroll">
								<Dados>Nome - Tipo - Quantidade</Dados>
										{tinta?.map((info) => (
											<Card name={info.name} tipo={info.type} quantidade={info.amount} />
										))}
								</SelectDados>
						</InfoProducts>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
