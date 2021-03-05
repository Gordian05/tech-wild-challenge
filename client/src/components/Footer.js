import React from "react";

const style = {
	footer: {
		color: "#fff",
		background: " #f76c6c",
		padding: "0.25em",
		position: "absolute",
		left: "0",
		bottom: "0",
		right: "0",
	},
};

export const Footer = () => {
	return (
		<footer style={style.footer}>
			<p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
		</footer>
	);
};
