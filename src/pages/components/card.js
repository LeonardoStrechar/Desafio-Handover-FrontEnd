const divStyle = {
	position: "relative",
	display: "flex",
};
const h3Styled = {
	position: "relative",
	padding: "3px",
};

export default function Card(){
    return (
        <div style={divStyle}>
            <h3 style={h3Styled}>teste</h3>
            <h3 style={h3Styled}>teste2</h3>
            <h3 style={h3Styled}>teste2</h3>
        </div>
    );
}