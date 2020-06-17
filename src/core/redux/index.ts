import { createStore, combineReducers } from "redux";

import mainReducer from "./reducer/main/main.reducer";
import { IMainReducerState } from "./reducer/main/main.interface";

export interface IReducers {
  mainReducer: IMainReducerState;
}

const w: any = window;
const store = createStore(
  combineReducers({ mainReducer }),
  w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
