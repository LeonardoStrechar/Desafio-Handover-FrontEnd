const divStyle = {
	position: "relative",
	display: "flex",
};
const h3Styled = {
	position: "relative",
	paddingLeft: "10px",
};

export default function Card(props){
    return (
        <div style={divStyle}>
            <h3 style={h3Styled}>{props.name}</h3>
            <h3 style={h3Styled}> - </h3>
            <h3 style={h3Styled}>{props.tipo}</h3>
            <h3 style={h3Styled}> - </h3>
            <h3 style={h3Styled}>{props.quantidade}</h3>
        </div>
    );
}