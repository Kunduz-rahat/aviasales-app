import React from "react";
import Layout from "../../components/Layout";
import TicketsList from "../../components/TicketsList";
const Tickets = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 space-y-12 py-10">
        <div className="container mx-auto">
          <div className="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
            <div className="h-20 bg-blue-700 flex items-center justify-between">
              <p className="mr-20 ml-5 text-white text-lg">13 400 P</p>
              <p className="mr-4 text-white font-thin text-lg">XiamenAir</p>
            </div>
            <div className="flex justify-between mt-6 px-5 mb-2 text-sm text-gray-600">
              <div>
                <p>MOW-HKT</p>
                <p>10:45-08:00</p>
              </div>
              <div>
                <p>В ПУТИ</p>
                <p>21ч 15м</p>
              </div>
              <div>
                <p>1 ПЕРЕСАДКА</p>
                <p>MOW,HKT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
            <div className="h-20 bg-blue-700 flex items-center justify-between">
              <p className="mr-20 ml-5 text-white text-lg">13 400 P</p>
              <p className="mr-4 text-white font-thin text-lg">XiamenAir</p>
            </div>
            <div className="flex justify-between mt-6 px-5 mb-2 text-sm text-gray-600">
              <div>
                <p>MOW-HKT</p>
                <p>10:45-08:00</p>
              </div>
              <div>
                <p>В ПУТИ</p>
                <p>21ч 15м</p>
              </div>
              <div>
                <p>1 ПЕРЕСАДКА</p>
                <p>MOW,HKT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
            <div className="h-20 bg-blue-700 flex items-center justify-between">
              <p className="mr-20 ml-5 text-white text-lg">13 400 P</p>
              <p className="mr-4 text-white font-thin text-lg">XiamenAir</p>
            </div>
            <div className="flex justify-between mt-6 px-5 mb-2 text-sm text-gray-600">
              <div>
                <p>MOW-HKT</p>
                <p>10:45-08:00</p>
              </div>
              <div>
                <p>В ПУТИ</p>
                <p>21ч 15м</p>
              </div>
              <div>
                <p>1 ПЕРЕСАДКА</p>
                <p>MOW,HKT</p>
              </div>
            </div>
          </div>
        </div>
        <TicketsList />
      </div>
    </Layout>
  );
};

export default Tickets;
