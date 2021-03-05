import "./App.css";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import store from "./store";
import ListUsers from "./components/ListUsers";
import FormUser from "./components/FormUser";
import { Footer } from "./components/Footer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<NavBar></NavBar>
				<div className="container">
					<h2>Ajouter un(e) Argonaute</h2>
					<FormUser></FormUser>
					<h2>Menbres de l'équipage</h2>
					<ListUsers></ListUsers>
				</div>
				<Footer></Footer>
			</div>
		</Provider>
	);
}

export default App;
