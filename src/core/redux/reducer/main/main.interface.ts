import { IType } from "core/interfaces.config";

export interface IMainReducerState {
  notification?: INotification;
}

export interface INotification {
  message: string;
  type?: IType;
}
