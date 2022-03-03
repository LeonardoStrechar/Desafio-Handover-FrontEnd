import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { read_cookie } from "sfcookies";
import axios from "axios";
import Card from "../components/card";
import HeaderT from "../components/header";
import Sidebar from "../components/sidebar";
import { Salvar, Dados, Select, Svg, Label, Input, Viwer, Painel, Grid, InfoProducts, SelectDados } from "../style-components";

import { ReactComponent as ImgFotolito } from "../../images/Fotolito.svg";
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

export default function Fotolito() {
	const ProductTypeId = "1";
	const size = null;
	const type = null;
	const usability = null;
	const [name, setNome] = useState("");
	const [liters, setLitragem] = useState("");
	const [amount, setQuantidade] = useState("");

	const navigate = useNavigate();
	
	const [fotolito, setFotolito] = useState([]);
	const authorization = read_cookie("authorization");
	
	useEffect(() => {
			axios.get('http://localhost:3001/products/?type=fotolito', {
				headers: {
					'authorization': `Bearer ${authorization}` 
				}
			})
			.then((response) => {
				console.log("deu certo aa");
				setFotolito(response.data);
				
			}).catch(() => {
				console.log("Não foi possivel realizar cadastro!");
			});

			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const produtos = fotolito.products

	function AddFotolito() {
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
			}
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
				
				<Viwer>
					<h3>Fotolito</h3>
					<Grid>
						<InfoProducts>
							<ImgFotolito />
							{/* <form action="/menu"> */}
							<div style={divStyle}>
								<Label style={LabelStyle} color="white">
									Nome
								</Label>
								<Input onChange={(e) => setNome(e.target.value)} required type="text" placeholder="Nome do fotolito" />
							</div>
							<br />
							<div>
								<Label style={LabelStyle} color="white">
									Litragem
								</Label>
								<Select onChange={(e) => setLitragem(e.target.value)} name="litragem">
									<option required defaultValue disabled>
										Selecione
									</option>
									<option value="20">20 Litros</option>
									<option value="18">18 Litros</option>
									<option value="5">5 Litros</option>
								</Select>
							</div>
							<div style={divStyle}>
								<Label style={LabelStyle} color="white">
									Quantidade
								</Label>
								<Input onChange={(e) => setQuantidade(e.target.value)} required style={InputStyle} type="number" placeholder="Quantidade de filmes" />
							</div>
							<div style={divStyle}>
								<Salvar onClick={AddFotolito} value="SALVAR" placeholder="SALVAR" />
							</div>
							{/* </form> */}
						</InfoProducts>
						<InfoProducts>
								<SelectDados overflow="scroll">
									<Dados>Nome  -  Litragem  -  Quantidade</Dados>
										{produtos?.map((info) => (
											<Card name={info.name} tipo={info.liters} quantidade={info.amount} />
										))}
								</SelectDados>
						</InfoProducts>
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
