import { combineReducers } from "redux";
import userReducers from "./userReduser";

export default combineReducers({
	user: userReducers,
});
