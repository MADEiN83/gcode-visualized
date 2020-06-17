import { useSelector } from "react-redux";

import { IReducers } from "core/redux";
import { IMainReducerState } from "core/redux/reducer/main/main.interface";

const useMainState = (): IMainReducerState =>
  useSelector((reducers: IReducers) => reducers.mainReducer);

export default useMainState;
