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
      return { isLoading: true, error: null, tickets: [] };
    case TicketActionTypes.TICKETS_SUCCESS:
      return { isLoading: false, tickets: action.payload, error: null };
    case TicketActionTypes.TICKETS_FAILED:
      return { isLoading: false, error: action.payload, tickets: [] };
    default:
      return state;
  }
};
