import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
// import airLines from "../../assets/airlines.jpg";
// // eslint-disable-next-line import/no-unresolved
// import xiamen from "../../assets/XiamenAir.jpg";
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
        <div key={ticket.id}>
          <div className="bg-white mt-2 max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
            <div className="h-20 bg-blue-700 flex items-center justify-between">
              <p className="mr-20 ml-5 text-white text-lg">{ticket.price} P</p>
              <p className="mr-4 text-white font-thin text-lg">
                {ticket.companyId === "7dc12d0b-ce42-48a0-8673-0dad4d698764"
                  ? "XiamenAir"
                  : "AirLines"}
              </p>
            </div>
            <div className="flex justify-between mt-6 px-5 mb-2 text-sm text-gray-600">
              <div>
                <p>
                  {ticket.info.origin}-{ticket.info.destination}
                </p>
                <p>10:45-08:00</p>
              </div>
              <div>
                <p>В ПУТИ</p>
                <p>21ч 15м</p>
              </div>
              <div>
                <p>
                  {ticket.info.stops.length === 1
                    ? "1 ПЕРЕСАДКА"
                    : ticket.info.stops.length === 0
                    ? "БЕЗ ПЕРЕСАДОК"
                    : ticket.info.stops.length === 2
                    ? "2 ПЕРЕСАДКИ"
                    : "3 ПЕРЕСАДКИ"}
                </p>
                <p> {ticket.info.stops}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketsList;
