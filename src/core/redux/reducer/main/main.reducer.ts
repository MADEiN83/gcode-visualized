import { IMainReducerState } from "./main.interface";

export const DISPLAY_NOTIFICATION = "DISPLAY_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";

const initialState: IMainReducerState = {
  notification: undefined,
};

const mainReducer = (
  state: IMainReducerState = initialState,
  action: { type: string; payload: any }
): IMainReducerState => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION:
      return { ...state, notification: action.payload };
    case CLEAR_NOTIFICATION:
      return { ...state, notification: undefined };
    default:
      return state;
  }
};

export default mainReducer;
