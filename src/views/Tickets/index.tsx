import React from "react";
import Layout from "../../components/Layout";
import TicketsList from "../../components/TicketsList";
const Tickets = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 space-y-12 py-10">
        <TicketsList />
      </div>
    </Layout>
  );
};

export default Tickets;
