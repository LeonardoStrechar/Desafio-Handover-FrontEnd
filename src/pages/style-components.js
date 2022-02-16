import styled from "styled-components";

export const Title = styled.h1`
    position: relative;
    text-align: center;
    font-size: ${props => `${props.fontSize}px`};
`;
export const SubTitle = styled.h2`
    text-align: center;
    font-size: ${props => `${props.fontSize}px`};
    padding-left: 150px;

    @media(max-width: 800px) {
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

    @media(min-width: 800px) {
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
    background: rgb(20,171,35);
`;

export const Table = styled.table`
    padding: ${props => `${props.padding}px`};
`;

export const Label = styled.label`
    font-size: 15px;
`;

export const Input = styled.input`
    background: white;
    border: none;
    border-radius: 20px;
    padding: 10px 60px;

    @media(min-width: 800px) {
        padding: 13px;
    }
`;

export const Button = styled.input.attrs(props => ({
    type: 'submit',
  }))`
    background: white;
    border: none;
    border-radius: 20px;
    color: black;
    margin: 10px 50px 20px;
    font-weight: bold;
    padding: 10px;
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
    padding:  10px 10px 0 10px;
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
    font-size: ${props => `${props.fontSize}px`};
    padding-left: 30px
`;
export const Sidebar = styled.div`
    position: relative;
    background: #020122;
    width: 250px;
    height: 640px;
    margin-left: 20px;
    border-radius: 20px;
`;
export const Viwer = styled.div`
    position: relative;
    background: #020122;
    width: 100%;
    height: 640px;
    margin-left: 20px;
    text-align: center;
    border-radius: 20px;
`;
export const Painel = styled.div`
    position: relative;
    display: flex;
    top: 20px;
    margin: 0px 20px 20px 0;
`;
export const ButtonSidebar = styled.button`
background: white;
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
export const Logout = styled.input.attrs(props => ({
    type: 'submit',
  }))`
    position: relative;
    width: 180px;
    top: 250px;
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