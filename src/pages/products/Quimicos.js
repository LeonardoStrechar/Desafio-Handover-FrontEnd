//Todos os imports para as funcionalidades da pagína
import React, { useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/sidebar";
import HeaderT from "../components/header";
import { Submit, Select, Svg, Label, Input, Viwer, Painel, Grid, InfoProducts, Hr } from "../style-components";

//Import de algumas imagens
import { ReactComponent as ImgQuimicos } from "../../images/Quimicos.svg";
import { ReactComponent as Background } from "../../images/Background.svg";

//Estilização criada somente para essa pagina
const InputStyle = {
	position: "relative",
	width: "80px",
	marginTop: "10px",
};

export default function Quimicos() {
//Constantes que armazenam dados para realizar a requisição via POST	
	const ProductTypeId = "4";
	const size = null;
	const type = null;
	const liters = null;
	const [name, setNome] = useState("");
	const [amount, setQuantidade] = useState("");
	const [usability, setUsability] = useState("");

//Constantes que armazenam dados para realizar a requisição via PUT	
	const [idAlter, setIdAlter] = useState("");
	const [newName, setNewName] = useState("");
	const [NewUsability, setNewUsability] = useState("");
	const [newQuantidade, setNewQuantidade] = useState("");

//Constantes que armazenam dados para realizar a requisição via DELETE	
	const [idDelete, setIdDelete] = useState("");
//Constantes que armazena a funcionalidade do react-router-dom para redirecionar o usuario a um caminho especifico
	const navigate = useNavigate();
//Const armezanando os valores transferidos pelo metodo GET
	const [quimico, setQuimico] = useState([]);
//Constante armezando o TOKEN de acesso do usuario ao sistema
	const authorization = read_cookie("authorization");

//Requisição via GET
	useEffect(() => {
		axios.get('http://localhost:3001/products/?type=Quimicos', {
			headers: {
				'authorization': `Bearer ${authorization}` 
			}
		})
		.then((response) => {
			setQuimico(response.data);
		}).catch(() => {
			alert("Não foi possivel visualizar os dados!");
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

//Desestruturação da resposta vinda da API
	const produtos = quimico.products

//Função para requisição vis POST
	function AddQuimicos() {
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
			type: type,
			usability: NewUsability,
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
					<h3>Quimicos</h3>
					<Grid>
						<InfoProducts>
							<ImgQuimicos />
							<div>
								<Label color="white">Nome</Label>
								<Input onChange={(e) => setNome(e.target.value)} required type="text" placeholder="Nome do fotolito" />
							</div>
							<div>
								<Label color="white">Usabilidade</Label>
								<Select onChange={(e) => setUsability(e.target.value)} name="usabilidade">
									<option required>Selecione</option>
									<option value="Solução de forno">Solução de forno</option>
									<option value="Revelador">Revelador</option>
									<option value="Corretivo">Corretivo</option>
									<option value="Anti-Misting">Anti-Misting</option>
								</Select>
							</div>
							<div>
								<Label color="white">Quantidade</Label>
								<Input onChange={(e) => setQuantidade(e.target.value)} required style={InputStyle} type="number" placeholder="Quantidade de filmes" />
							</div>
							<br/>
							<div>
								<Submit onClick={AddQuimicos} value="SALVAR" placeholder="SALVAR" />
							</div>
						</InfoProducts>
					{/* Fim da estrutura para Cadastro de novos Produtos*/}
					{/* Estrutura para Alteração dos Produto */}
						<InfoProducts>
							<div>
								<Label color="white">Selecione a tinta em estoque para alterar</Label>
								<Select onChange={(e) => setIdAlter(e.target.value)}>
									<option required>Nome - Usabilidade - Quantidade</option>
									{produtos?.map((info) => (
										<option key={info.id} value={info.id}> {info.name} - {info.usability} - {info.amount} </option>
									))}
								</Select>
							</div>
							<div >
								<Label color="white">Insira as novas informações</Label>
								<Input onChange={(e) => setNewName(e.target.value)} required style={InputStyle}  type="text"  placeholder="Nome" />
								<Select onChange={(e) => setNewUsability(e.target.value)} style={InputStyle}>
									<option disabled>Selecione</option>
									<option value="Solução de forno">Solução de forno</option>
									<option value="Revelador">Revelador</option>
									<option value="Corretivo">Corretivo</option>
									<option value="Anti-Misting">Anti-Misting</option>
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
									<option required>Nome - Usabilidade - Quantidade</option>
									{produtos?.map((info) => (
										<option key={info.id} value={info.id}> {info.name} - {info.usability} - {info.amount} </option>
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
