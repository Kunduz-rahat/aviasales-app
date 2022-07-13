import React from 'react'
import Layout from '../../components/Layout'

const Companies = () => {
	return (
		<Layout>
			<div className="py-16 ">
				<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
					<div className="mb-12 space-y-2 text-center">

						<h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Наши компании перевозчики</h2>
					</div>

					<div className="grid gap-12 lg:grid-cols-2">
						<div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
							<img src="https://airhex.com/images/airline-logos/tail/xiamen-airlines.png" alt="art cover" loading="lazy" width="1000" height="667"
								className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
							<div className="sm:w-7/12 pl-0 p-5">
								<div className="space-y-2">
									<div className="space-y-4">
										<h4 className="text-2xl font-semibold text-cyan-900">XiamenAir</h4>
										<p className="text-gray-600">XiamenAir - китайская пассажирская авиакомпания, базирующаяся в Сямыне, провинция Фуцзянь. Авиакомпания выполняет регулярные пассажирские рейсы из международного аэропорта Сямынь Гаоци и, в меньшей степени, международного аэропорта Фучжоу Чанлэ и международного аэропорта Ханчжоу Сяошань.</p>
									</div>
								
								</div>
							</div>
						</div>
						<div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
							<img src="https://www.s7.ru/images/icons/icon-600x400.jpg" alt="art cover"
								loading="lazy" width="1000" height="667"
								className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg 
							 transition duration-500 group-hover:rounded-xl"/>
							<div className="sm:w-7/12 pl-0 p-5">
								<div className="space-y-2">
									<div className="space-y-4">
										<h4 className="text-2xl font-semibold text-cyan-900">S7 Airlines</h4>
										<p className="text-gray-600">S7 Airlines — российская авиакомпания, бывший[4] член глобального авиационного альянса Oneworld[5], выполняет внутренние и международные пассажирские авиаперевозки, входит в перечень системообразующих организаций РФ[6], является второй по величине авиакомпанией России[7][8].

											Маршрутная сеть авиакомпании выстроена на базе авиатранспортных узлов, расположенных в аэропортах Домодедово (Москва) и Толмачёво (Новосибирск), по состоянию на 2016 год охватывала 205 направлений и 181 город в 26 странах мира[9].

											Штаб-квартира расположена в Новосибирске.</p>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Companies