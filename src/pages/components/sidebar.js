import React from "react";
import { Title, Side, ButtonSidebar, Logout, SpanOpen } from "../style-components";
import { delete_cookie } from "sfcookies";
import { useNavigate } from "react-router-dom";


export default function Sidebar(){
    const navigate = useNavigate();
    
    // função para deslogar	
    function FunctionLogout(){
        delete_cookie("authorization");
        navigate("/");
    }

    function OpenNav() {
        console.log("1");
        document.getElementById("mySidenav").className.width = "250px";
        
    }
    
  
    return (
        <div>
            {/* <SpanOpen onClick={OpenNav}>open &#9776;</SpanOpen> */}
            <Side id="sidebar">
                <Title fontSize={20}>PRODUTOS</Title>
                <a href="/menu">
                    <ButtonSidebar>Menu</ButtonSidebar>
                </a>
                <a href="/fotolito">
                    <ButtonSidebar>Fotolito</ButtonSidebar>
                </a>
                <a href="/chapas">
                    <ButtonSidebar>Chapas</ButtonSidebar>
                </a>
                <a href="/tintas">
                    <ButtonSidebar>Tintas</ButtonSidebar>
                </a>
                <a href="/quimicos">
                    <ButtonSidebar>Quimicos</ButtonSidebar>
                </a>
                <Logout onClick={FunctionLogout} >LOGOUT</Logout>
            </Side>
        </div>
    );
}