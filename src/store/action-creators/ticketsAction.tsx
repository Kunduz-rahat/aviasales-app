import axios from "axios";
import { Dispatch } from "redux";
import { TicketAction, TicketActionTypes } from "../../types";

export const fetchTickets = () => {
  return async (dispatch: Dispatch<TicketAction>) => {
    try {
      dispatch({ type: TicketActionTypes.TICKETS_REQUEST });
      const responce = await axios.get(
        "https://api.npoint.io/163b5e66df9f2741243e"
      );
      dispatch({
        type: TicketActionTypes.TICKETS_SUCCESS,
        payload: responce.data,
      });
    } catch (e) {
      dispatch({
        type: TicketActionTypes.TICKETS_FAILED,
        payload:
          "Произошла ошибка при загрузке билетов, попробуйте снова пожалуйста",
      });
    }
  };
};
