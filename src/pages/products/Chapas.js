//Todos os imports para as funcionalidades da pagína
import React, { useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderT from "../components/header";
import Sidebar from "../components/sidebar";
import { Select, Svg, Label, Input, Viwer, Painel, Grid, InfoProducts, Submit, Hr } from "../style-components";

//Import de algumas imagens
import { ReactComponent as ImgChapa } from "../../images/Chapas.svg";
import { ReactComponent as Background } from "../../images/Background.svg";

//Estilização criada somente para essa pagina
const InputStyle = {
	position: "relative",
	width: "80px",
	marginTop: "10px",
};

export default function Chapas() {
//Constantes que armazenam dados para realizar a requisição via POST	
	const ProductTypeId = "2";
	const [size, setTamanho] = useState("");
	const type = null;
	const usability = null;
	const [name, setNome] = useState("");
	const liters = null;
	const [amount, setQuantidade] = useState("");

//Constantes que armazenam dados para realizar a requisição via PUT	
	const [idAlter, setIdAlter] = useState("");
	const [newName, setNewName] = useState("");
	const [newSize, setNewSize] = useState("");
	const [newQuantidade, setNewQuantidade] = useState("");

//Constantes que armazenam dados para realizar a requisição via DELETE	
	const [idDelete, setIdDelete] = useState("");
//Constantes que armazena a funcionalidade do react-router-dom para redirecionar o usuario a um caminho especifico
	const navigate = useNavigate();
//Const armezanando os valores transferidos pelo metodo GET
	const [chapas, setChapas] = useState([]);
//Constante armezando o TOKEN de acesso do usuario ao sistema
	const authorization = read_cookie("authorization");

//Requisição via GET
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Chapa', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			setChapas(response.data);
		}).catch(() => {
			alert("Não foi possivel visualizar os dados!");
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

//Desestruturação da resposta vinda da API
	const produtos = chapas.products
	
//Função para requisição vis POST
	function AddChapas() {
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
			size: newSize,
			type: type,
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
					<h3>Chapas</h3>
					<Grid>
						{/* Estrutura para Cadastro de novos Produtos	 */}
						<InfoProducts>
							<ImgChapa />
								<div>
									<Label color="white">Código</Label>
									<Input onChange={(e) => setNome(e.target.value)} required type="number" placeholder="Insira o código da chapa" />
								</div>
								<div>
									<Label color="white">Tamanho</Label>
									<Select onChange={(e) => setTamanho(e.target.value)} style={InputStyle} >
										<option required>Selecione</option>
										<option value="1x1">1x1 m</option>
										<option value="2x2">2x2 m</option>
										<option value="3x3">3x3 m</option>
									</Select>
								</div>
								<div>
									<Label color="white">Quantidade</Label>
									<Input onChange={(e) => setQuantidade(e.target.value)} required style={InputStyle} type="number" placeholder="Quantidade de chapas" />
								</div>
								<br/>
								<div>
									<Submit onClick={AddChapas} value="SALVAR" placeholder="SALVAR" />
								</div>
						</InfoProducts>
					{/* Fim da estrutura para Cadastro de novos Produtos*/}
					{/* Estrutura para Alteração dos Produto */}
						<InfoProducts>
							<div >
								<Label color="white">Selecione uma chapa em estoque para alterar</Label>
								<Select onChange={(e) => setIdAlter(e.target.value)}>
									<option required defaultValue disabled>Nome - Tamanho - Quantidade</option>
									{produtos?.map((info) => (
										<option key={info.id} value={info.id}> {info.name} - {info.size} - {info.amount} </option>
									))}
								</Select>
							</div>
							<div >
								<Label color="white">Insira as novas informações</Label>
								<Input onChange={(e) => setNewName(e.target.value)} required style={InputStyle}  type="text"  placeholder="Nome" />
								<Select onChange={(e) => setNewSize(e.target.value)} placeholder="Litragem" style={InputStyle}>
									<option required>Selecione</option>
									<option value="1x1">1x1 m</option>
									<option value="2x2">2x2 m</option>
									<option value="3x3">3x3 m</option>
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
								<Label color="white">Selecione para apagar</Label>
								<Select onChange={(e) => setIdDelete(e.target.value)}>
									<option required defaultValue disabled>Nome - Tamanho - Quantidade</option>
									{produtos?.map((info) => (
										<option key={info.id} value={info.id}> {info.name} - {info.size} - {info.amount} </option>
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
