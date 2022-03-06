//Todos os imports para as funcionalidades da pagína
import React, { useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
import axios from "axios";
import HeaderT from "../components/header";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { Submit, Select, Svg, Label, Input, Viwer, Painel, Grid, InfoProducts, Hr } from "../style-components";

//Import de algumas imagens
import { ReactComponent as ImgTinta } from "../../images/Tinta.svg";
import { ReactComponent as Background } from "../../images/Background.svg";

//Estilização criada somente para essa pagina
const InputStyle = {
	position: "relative",
	width: "80px",
	marginTop: "10px",
};

export default function Tintas() {
//Constantes que armazenam dados para realizar a requisição via POST	
	const ProductTypeId = "3";
	const size = null;
	const liters = null;
	const usability = null;
	const [name, setNome] = useState("");
	const [type, setTipo] = useState("");
	const [amount, setQuantidade] = useState("");

//Constantes que armazenam dados para realizar a requisição via PUT
	const [idAlter, setIdAlter] = useState("");
	const [newName, setNewName] = useState("");
	const [newType, setNewType] = useState("");
	const [newQuantidade, setNewQuantidade] = useState("");

//Constantes que armazenam dados para realizar a requisição via DELETE	
	const [idDelete, setIdDelete] = useState("");
//Constantes que armazena a funcionalidade do react-router-dom para redirecionar o usuario a um caminho especifico
	const navigate = useNavigate();
//Const armezanando os valores transferidos pelo metodo GET
	const [tintas, setTinta] = useState([]);
//Constante armezando o TOKEN de acesso do usuario ao sistema
	const authorization = read_cookie("authorization");

//Requisição via GET
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Tinta', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			setTinta(response.data);
		}).catch(() => {
			console.log("Não foi possivel visualizar os dados!");
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

//Desestruturação da resposta vinda da API
	const produtos = tintas.products

//Função para requisição vis POST
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

//Função para requisição via PUT
	function Alter(){
		const authorization = read_cookie("authorization");
		axios.put(`http://localhost:3001/products/${idAlter}`, {
			name: newName,
			amount: newQuantidade,
			typeId: ProductTypeId,
			liters: liters,
			size: size,
			type: newType,
			usability: usability,
		}, {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then(() => {
			alert("Item alterado com sucesso!");
			navigate("/menu");
		})
		.catch(() => {
			alert("Não foi possivel realizar alteração");
		});
	}

//Function para requisição DELETE
	function Delete(){
		const authorization = read_cookie("authorization");
		axios.delete(`http://localhost:3001/products/${idDelete}`, {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then(() => {
			alert("Item deletado com sucesso!");
			navigate("/menu");
		})
		.catch(() => {
			alert("Não foi possivel realizar deletar!");
		});
	}

	//Abaixo está a estrutura em HTML juntamente com componentes do STYLED-COMPONENTS
	return (
		<div>
			<Svg>
				<Background />
			</Svg>
			<div>
				<HeaderT/>
			</div>
			<Painel>
				<Sidebar/>
				<Viwer>
					<h3>Tintas</h3>
					<Grid>
					{/* Estrutura para Cadastro de novos Produtos	 */}
						<InfoProducts>
							<ImgTinta />
							<div>
								<Label color="white">Nome</Label>
								<Input  onChange={(e) => setNome(e.target.value)} required type="text" placeholder="Nome do fotolito" />
							</div>
							<div>
								<Label color="white">Tipo</Label>
								<Select  onChange={(e) => setTipo(e.target.value)} name="litragem">
									<option required>Selecione</option>
									<option value="Verão">verão</option>
									<option value="Inverno">inverno</option>
								</Select>
							</div>
							<div>
								<Label color="white">Quantidade</Label>
								<Input onChange={(e) => setQuantidade(e.target.value)} required style={InputStyle} type="number" placeholder="Quantidade de filmes" />
							</div>
							<br/>
							<div>
								<Submit onClick={AddTintas} value="SALVAR" placeholder="SALVAR" />
							</div>
						</InfoProducts>
					{/* Fim da estrutura para Cadastro de novos Produtos*/}
					{/* Estrutura para Alteração dos Produto */}
						<InfoProducts>
							<div>
								<Label color="white">Selecione uma tinta em estoque para alterar</Label>
								<Select onChange={(e) => setIdAlter(e.target.value)}>
									<option required>Nome - Tipo - Quantidade</option>
									{produtos?.map((info) => (
										<option key={info.id} value={info.id}> {info.name} - {info.type} - {info.amount} </option>
									))}
								</Select>
							</div>
							<div >
								<Label color="white">Insira as novas informações</Label>
								<Input onChange={(e) => setNewName(e.target.value)} required style={InputStyle}  type="text"  placeholder="Nome" />
								<Select onChange={(e) => setNewType(e.target.value)} placeholder="Litragem" style={InputStyle}>
									<option required>Selecione</option>
									<option value="verão">verão</option>
									<option value="inverno">inverno</option>
								</Select>
								<Input onChange={(e) => setNewQuantidade(e.target.value)} required style={InputStyle}  type="number"  placeholder="Quantidade" />
							</div>
							<div>
								<Submit onClick={Alter} value="SALVAR ALTERAÇÕES" />
							</div>
					{/* Fim da strutura para Alteração dos Produto */}
							<Hr/>
					{/* Estrutura para Deletar os produtos */}
							<div>
								<Label color="white">
									Selecione para apagar
								</Label>
								<Select onChange={(e) => setIdDelete(e.target.value)}>
									<option required disabled>Nome - Tipo - Quantidade</option>
									{produtos?.map((info) => (
										<option key={info.id} value={info.id}> {info.name} - {info.type} - {info.amount} </option>
									))}
								</Select>
							</div>
							<div>
								<Submit onClick={Delete} value="DELETAR ITEM" />
							</div>
						</InfoProducts>
					{/* Fim da estrutura para Deletar os produtos */}
					</Grid>
				</Viwer>
			</Painel>
		</div>
	);
}
