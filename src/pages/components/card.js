import { ReactComponent as IconEdit } from "../../images/IconEdit.svg";
import { ReactComponent as IconDelete } from "../../images/IconDelete.svg";

import { Icons } from "../style-components";

const divStyle = {
	position: "relative",
	display: "flex",
};
const h3Styled = {
	position: "relative",
	paddingLeft: "10px",
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
            <h3 style={h3Styled}>{props.name}</h3>
            <h3 style={h3Styled}> - </h3>
            <h3 style={h3Styled}>{props.tipo}</h3>
            <h3 style={h3Styled}> - </h3>
            <h3 style={h3Styled}>{props.quantidade}</h3>
            <Icons>
                <a href={props.edit}>
                    <IconEdit style={IconStyle} />
                </a>
                <IconDelete style={IconStyle} />
            </Icons>
        </div>
    );
}