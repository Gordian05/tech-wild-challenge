import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../store/actions/usersActions";

const style = {
	styleForm: {

	},
	styleInput: {
		border: "none",
		margin: "1rem",
		width: "20%",
		borderBottom:" 1px solid #f76c6c",
		outline: "none",
		background: "none"
	},
	styleButton: {
		width: "15%",
		color: "white",
		padding: "5px",
		background: "#f76c6c",
		border: "1px solid #f4f4f4",
		cursor: "pointer",
	},
}

class FormUser extends Component {
	state = {
		name: "",
	};

    onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
		};
		this.props.addUser(newUser);
		this.setState({
			name: ""
		})
		this.mainInput.reset()
	};

	render() {
		return (
			<div>
				<p>Nom de l'Argonaute</p>
				<form ref={(ref) => this.mainInput= ref}  stylr={style.styleForm} onSubmit={this.onSubmit}>
					<input style={style.styleInput}   type="text" name="name" id="user" placeholder="Nom" onChange={this.onChange}/>
					<button disabled={!this.state.name} style={   style.styleButton }>Envoyer</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { addUser })(FormUser);
