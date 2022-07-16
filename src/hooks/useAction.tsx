import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TicketsActionsCreators from "../store/action-creators/ticketsAction";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TicketsActionsCreators, dispatch);
};
