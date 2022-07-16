import React from "react";
import Layout from "../../components/Layout";
import TicketsList from "../../components/TicketsList";
const Home = () => {
  return (
    <Layout>
      <section className="mx-auto">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <TicketsList />
        </div>
      </section>
    </Layout>
  );
};
export default Home;
