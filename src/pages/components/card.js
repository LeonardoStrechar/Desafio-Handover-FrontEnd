import React from "react";

import { ReactComponent as IconEdit } from "../../images/IconEdit.svg";
import { ReactComponent as IconDelete } from "../../images/IconDelete.svg";

import { Icons, InfoRequest } from "../style-components";

const divStyle = {
	position: "relative",
	display: "flex",
    top: "50px",
    margin: "10px 10px 0px 40px",
};
const IconStyle = {
    position: "relative",
	display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 20px 0px 0px",
};
const ButtonStyle = {
   border: "none",
   width: "20px",
};

export default function Card(props){
    return (
        <div style={divStyle}>
            <InfoRequest>{props.name}</InfoRequest>
            <InfoRequest>{props.tipo}</InfoRequest>
            <InfoRequest>{props.quantidade}</InfoRequest>
            <InfoRequest>
                <Icons>
                    <button style={ButtonStyle}><IconEdit style={IconStyle} /></button>
                    <button style={ButtonStyle}><IconDelete style={IconStyle} /></button>
                </Icons> 
            </InfoRequest>
        </div>
    );
}