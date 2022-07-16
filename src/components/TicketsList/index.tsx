import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
// eslint-disable-next-line no-unused-vars
import { fetchTickets } from "../../store/action-creators/ticketsAction";
const TicketsList: React.FC = () => {
  const { tickets, error, isLoading } = useTypedSelector(
    (state) => state.tickets
  );
  const { fetchTickets } = useActions();

  useEffect(() => {
    fetchTickets();
  }, []);

  if (isLoading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id}>{ticket.info.stops}</div>
      ))}
    </div>
  );
};

export default TicketsList;
