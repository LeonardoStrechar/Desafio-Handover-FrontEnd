import styled from "styled-components";

export const Hr = styled.p`
	background: white;
	height: 1px;
	border: none;
	border-radius: 20px;
	opacity: 0.2;
	margin: 0px 40px 0px 40px; 
`;

export const Title = styled.h1`
	position: relative;
	text-align: center;
	font-size: ${(props) => `${props.fontSize}px`};
`;
export const SubTitle = styled.h2`
	text-align: center;
	font-size: ${(props) => `${props.fontSize}px`};
	padding-left: 150px;

	@media (max-width: 800px) {
		padding-left: 70px;
		display: flex;
	}
`;
export const Svg = styled.div`
	position: fixed;
`;

export const Container = styled.div`
	top: 50px;
	position: relative;
	display: grid;
	justify-content: space-around;

	@media (min-width: 800px) {
		top: 200px;
		display: flex;
	}
`;

export const Border = styled.table`
	border: solid;
	border-width: 3px;
	border-radius: 10px;
	border-color: white;
	display: grid;
	background: rgb(20, 171, 35);
`;

export const Table = styled.table`
	padding: ${(props) => `${props.padding}px`};
`;

export const Label = styled.label`
	display: grid;
	font-size: 15px;
	color: ${(props) => `${props.color}`};
`;

export const Link = styled.a`
	color: white;
`;

export const Input = styled.input`
	background: white;
	border: none;
	border-radius: 20px;
	padding: 10px 60px;
	font-size: 14px;
	min-width: 210px;
	 
	@media (min-width: 800px) {
		padding: 13px;
	}
`;

export const ButtonLogin = styled.input`
	text-align: center;
	background: white;
	border: none;
	border-radius: 20px;
	color: black;
	margin: 10px 50px 20px;
	font-weight: bold;
	padding: 10px;
	cursor: pointer;
	&:hover {
		background: #ffa200;
		color: white;
		font-weight: bolder;
	}
`;
export const Button = styled.input`
	text-align: center;
	background: white;
	border: none;
	border-radius: 20px;
	color: black;
	margin: 10px 50px 20px;
	font-weight: bold;
	padding: 10px;
	cursor: pointer;
	&:hover {
		background: #ffa200;
		color: white;
		font-weight: bolder;
	}
`;
export const RedesSociais = styled.div`
	position: relative;
	justify-content: center;
	display: flex;
`;
export const Rede = styled.div`
	padding: 10px 10px 0 10px;
	display: flex;
`;
export const Header = styled.header`
	position: relative;
	width: 100%;
	height: 100px;
	background: #020122;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const User = styled.h1`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	font-size: ${(props) => `${props.fontSize}px`};
	padding-left: 30px;
`;
export const Side = styled.div`
	position: relative;
	background: #020122;
	width: 250px;
	height: 640px;
	margin-left: 20px;
	border-radius: 20px;
	@media (max-width: 700px) {
		width: 0;
		position: fixed;
		z-index: 1;
		overflow-x: hidden;
		transition: 1s;
	}
`;
export const Viwer = styled.div`
	position: relative;
	background: #020122;
	width: 100%;
	height: 100%;
	margin-left: 20px;
	padding: 0px 15px 5px 20px;
	text-align: center;
	border-radius: 20px;
	top: 13px;
	@media (max-width: 700px) {
		margin: 10px 0px 10px 20px;
		height: 100%;
	}
`;
export const SpanOpen = styled.button`
	position: fixed;
	z-index: -1;
	overflow-x: hidden;
	font-size: 23px;
	background: #30343F;
	width: 100px;
	text-align: end;
	padding-right: 10px;
	border-radius: 10px;
	color: white;

	@media (max-width: 700px) {
		cursor: pointer,
		backgorund: white;
		z-index: 1;
		top: 140px
	}
`;

export const Painel = styled.div`
	position: relative;
	display: flex;
	top: 20px;
	margin: 0px 20px 20px 0;
`;
export const ButtonSidebar = styled.button`
	background: ${(props) => `${props.background}`};
	border: none;
	border-radius: 20px;
	color: black;
	margin: 10px 30px 10px;
	font-weight: bold;
	padding: 10px;
	width: 180px;
	text-align: start;
	&:hover {
		background: #ffa200;
		color: white;
		font-weight: bolder;
	}
`;
export const Logout = styled.button`
	position: relative;
	width: 180px;
	top: 240px;
	background: white;
	border: none;
	border-radius: 20px;
	color: black;
	margin: 10px 30px 20px;
	padding: 10px;
	font-weight: 800;
	&:hover {
		background: #ffa200;
		color: white;
		font-weight: bolder;
		font-weight: 800;
	}
`;
export const Submit = styled.input.attrs((props) => ({
	type: "submit",
}))`
	position: relative;
	width: 180px;
	background: white;
	border: none;
	border-radius: 20px;
	color: black;
	padding: 10px;
	font-weight: 800;
	cursor: pointer;
	&:hover {
		background: #ffa200;
		color: white;
		font-weight: bolder;
		font-weight: 800;
	}
	@media (max-width: 700px) {
		margin-top: 20px;
	}
`;

export const Grid = styled.div`
	position: relative;
	display: flex;
	@media (max-width: 800px) {
		display: grid;
		margin: 0px 47px 0px 10px;
	}
`;

export const InfoTable = styled.div`
	position: relative;
	background: white;
	width: 100%;
	height: 200px;
	margin: 10px 10px 0px 0px;
	padding: 15px;
	color: black;
	border: solid;
	border-radius: 20px;
	overflow-y: scroll;
`;

export const InfoTitle = styled.h2`
	position: relative;
	font-size: 16px;
	top: -30px;
	color: black;
`;

export const InfoRequest = styled.div`
	position: relative;
	top: -58px;
	width: 100%;
	text-align: start;
	font-weight: bolder;
`;
export const InfoRespose = styled.div`
	position: relative;
	width: 100%;
	margin: 0px 7px 0px 0px;
	text-align: start;
	font-weight: 300;
	font-size: 14px;
`;

export const InfoProducts = styled.div`
	position: relative;
	display: grid;
	background: ${(props) => `${props.background}`};
	width: 100%;
	padding: 15px;
	color: black;
	justify-content: center;
`;

export const Form = styled.form`
	position: relative;
	display: flex;
	background: red;
`;

export const Select = styled.select`
	padding: 12px 60px;
	border: none;
	border-radius: 20px;
	font-size: 14px;
	min-width: 240px;
`;
export const SelectDados = styled.div`
	position: relative;
	background: white;
	width: 100%;
	height: 530px;
	border: black;
	border-radius: 20px;
	overflow-y: ${(props) => `${props.overflow}`};
`;

export const Dados = styled.div`
	position: relative;
	display: flex;
	width: 500px;
	padding: 4px;
	margin: 0px 60px 0px 10px;
`;

export const Icons = styled.div`
	position: relative;
	display: flex;
	padding-top: 10px;
	padding-left: 230px;
`;