import { ReactComponent as IconEdit } from "../../images/IconEdit.svg";
import { ReactComponent as IconDelete } from "../../images/IconDelete.svg";

import { Icons, InfoRequest } from "../style-components";

const divStyle = {
	position: "relative",
	display: "flex",
    top: "50px",
    margin: "10px 10px 0px 10px",
};
const IconStyle = {
    position: "relative",
	display: "flex",
    justifyContent: "center",
    background: "blue",
    alignItems: "center",
};

export default function Card(props){
    return (
        <div style={divStyle}>
            <InfoRequest>{props.name}</InfoRequest>
            <InfoRequest>{props.tipo}</InfoRequest>
            <InfoRequest>{props.quantidade}</InfoRequest>
            <InfoRequest>
            <Icons>
                <a href={props.edit}>
                    <IconEdit style={IconStyle} />
                </a>
                <IconDelete style={IconStyle} />
            </Icons>
            </InfoRequest>
        </div>
    );
}