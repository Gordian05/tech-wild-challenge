import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/usersActions";

const style = {
	containerUser: {
		width: "80%",
		margin: "auto",
		display: 'flex',
		flexDirection:"row",
		flexWrap:"wrap",
		justifyContent: 'space-evenly'
	},
	itemUser:{
		padding: "0.25rem",
		margin: "auto",
		width: "30%"
	} 

}
class ListUsers extends Component {

	componentDidMount() {
		this.props.getUsers();
	}

	render() {
		const { users } = this.props.user;
		return (
			<div style={style.containerUser}>
				{users.map((user) => (
					<div style={style.itemUser} key={user._id}>{user.name}</div>
				))}
			</div>
		);
	}
}

ListUsers.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUsers })(ListUsers);
