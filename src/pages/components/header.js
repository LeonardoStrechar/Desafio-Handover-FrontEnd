import { Header, User, Title, RedesSociais, Rede } from "../style-components";
import { ReactComponent as IconFacebook } from "../../images/IconFacebook.svg";
import { ReactComponent as IconInstagram } from "../../images/IconInstagram.svg";
import { ReactComponent as IconLinkedin } from "../../images/IconLinkedin.svg";

export default function HeaderT(){
    return (
        <Header>
            <User fontSize={16}>Bem vindo, </User>
            <Title fontSize={20}>HandOver </Title>
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
        </Header>
    );
}