import { Link } from "react-router-dom";

const LiveResult = () => {
    return (
        <section className=" dark:bg-gray-900">
            <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-center p-2">
                <h1 className="text-white font-extrabold text-4xl">OYSCATECH SUG ELECTION</h1>

            </div>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-teal-800 capitalize lg:text-4xl dark:text-white">Electoral Commitee</h1>
                <div className="bg-white mt-16">
                    <h1 className="font-bold">Total Registered Voters - 3980</h1>
                    <h1 className="font-bold">Voting in session</h1>
                    <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-100 rounded-xl">
                            <div>
                                <h1 className="text-2xl  text-gray-700 capitalize">President 1</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <div className="p-2 border-2">
                                <h1 className="text-4xl font-bold text-gray-700 capitalize">200</h1>

                            </div>
                        </div>
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-100 rounded-xl">
                            <div>
                                <h1 className="text-2xl  text-gray-700 capitalize">President 2</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <div className="p-2 border-2">
                                <h1 className="text-4xl font-bold text-gray-700 capitalize">120</h1>

                            </div>
                        </div>
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-100 rounded-xl">
                            <div>
                                <h1 className="text-2xl  text-gray-700 capitalize">Gen sec 1</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <div className="p-2 border-2">
                                <h1 className="text-4xl font-bold text-gray-700 capitalize">60</h1>

                            </div>
                        </div>
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-100 rounded-xl">
                            <div>
                                <h1 className="text-2xl  text-gray-700 capitalize">Gen sec 2</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <div className="p-2 border-2">
                                <h1 className="text-4xl font-bold text-gray-700 capitalize">45</h1>

                            </div>
                        </div>
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-100 rounded-xl">
                            <div>
                                <h1 className="text-2xl  text-gray-700 capitalize">Gen sec 3</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <div className="p-2 border-2">
                                <h1 className="text-4xl font-bold text-gray-700 capitalize">25</h1>

                            </div>
                        </div>
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-100 rounded-xl">
                            <div>
                                <h1 className="text-2xl  text-gray-700 capitalize">PRO 1</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <div className="p-2 border-2">
                                <h1 className="text-4xl font-bold text-gray-700 capitalize">55</h1>

                            </div>
                        </div>
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-100 rounded-xl">
                            <div>
                                <h1 className="text-2xl  text-gray-700 capitalize">PR0 2</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <div className="p-2 border-2">
                                <h1 className="text-4xl font-bold text-gray-700 capitalize">19</h1>

                            </div>
                        </div>
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-100 rounded-xl">
                            <div>
                                <h1 className="text-2xl  text-gray-700 capitalize">Treasurer</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <div className="p-2 border-2">
                                <h1 className="text-4xl font-bold text-gray-700 capitalize">119</h1>

                            </div>
                        </div>



                    </div>

                </div>
            </div>

            <div className="text-center">
                <Link to={'/'}
                    class="text-white   bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 
                    dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg  px-6 py-3.5  text-center mr-2 mb-2"> Log Out
                </Link>
            </div>
        </section>
    );
}

export default LiveResult;