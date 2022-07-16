/* eslint-disable no-unused-vars */

export interface TicketState {
  tickets: any[];
  isLoading: boolean;
  error: null | string;
}
export enum TicketActionTypes {
  TICKETS_REQUEST = "TICKETS_REQUEST",
  TICKETS_SUCCESS = "TICKETS_SUCCESS",
  TICKETS_FAILED = "TICKETS_FAILED",
}
interface TicketsRequestAction {
  type: TicketActionTypes.TICKETS_REQUEST;
}
interface TicketsSuccessAction {
  type: TicketActionTypes.TICKETS_SUCCESS;
  payload: any[];
}
interface TicketsFailedAction {
  type: TicketActionTypes.TICKETS_FAILED;
  payload: string;
}
// export interface TicketAction {
//   type: string;
//   payload?: any;
// }
export type TicketAction =
  | TicketsRequestAction
  | TicketsSuccessAction
  | TicketsFailedAction;
