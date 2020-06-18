import { IMainReducerState } from "./main.interface";

export const SET_CANVAS_UTILS = "SET_CANVAS_UTILS";
const initialState: IMainReducerState = { canvasManager: undefined };

const mainReducer = (
  state: IMainReducerState = initialState,
  action: { type: string; payload: any }
): IMainReducerState => {
  switch (action.type) {
    case SET_CANVAS_UTILS:
      return {
        ...state,
        canvasManager: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
