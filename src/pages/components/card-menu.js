import { InfoRequest } from "../style-components";

const divStyle = {
	position: "relative",
	display: "flex",
};

export default function CardMenu(props){
    return (
        <div style={divStyle}>
            <InfoRequest>{props.name}</InfoRequest>
            <InfoRequest>{props.tipo}</InfoRequest>
            <InfoRequest>{props.quantidade}</InfoRequest>
        </div>
    );
}