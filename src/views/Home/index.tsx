import React from "react";
import Layout from "../../components/Layout";
const Home = () => {
  return (
    <Layout>
      <section className="pt-16 mx-auto">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">
              Поиск дешевых авиабилетов
            </h2>
          </div>
          <div className=" mx-auto text-gray-600 lg:block hidden">
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Откуда"
            />
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Куда"
            />
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Когда"
            />
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Обратно"
            />
            <button type="submit" className=" right-0 top-0 mt-3 mr-2">
              Найти билеты
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
