import { TicketAction, TicketActionTypes, TicketState } from "../../types";
const initialState: TicketState = {
  isLoading: true,
  tickets: [],
  error: null,
};

export const ticketsReducer = (
  state = initialState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case TicketActionTypes.TICKETS_REQUEST:
      return { ...state, isLoading: true };
    case TicketActionTypes.TICKETS_SUCCESS:
      return { ...state, isLoading: false, tickets: action.payload };
    case TicketActionTypes.TICKETS_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
