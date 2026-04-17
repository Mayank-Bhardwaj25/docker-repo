import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { StudentReducer } from "./redux/StudentReducer";

const store  = createStore(StudentReducer, applyMiddleware(thunk))
export default store;