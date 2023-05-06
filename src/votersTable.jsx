import { Link } from "react-router-dom";

const VoterTable = () => {
    return (
        <section className=" dark:bg-gray-900">
            <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-center p-2">
                <h1 className="text-white font-extrabold text-4xl">OYSCATECH SUG ELECTION</h1>

            </div>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-teal-800 capitalize lg:text-4xl dark:text-white">Voter details and activities</h1>
                <div className="bg-white mt-16">
                    <div className="overflow-x-auto border-x border-t">
                        <table className="table-auto  w-full">
                            <thead className="border-b">
                                <tr className="bg-gray-100">
                                    <th className="text-left p-4 font-bold">
                                        S/N
                                    </th>
                                    <th className="text-left p-4 font-bold">
                                        TAG NUMBER
                                    </th>
                                    <th className="text-left p-4 font-bold">
                                        NAME
                                    </th>
                                    <th className="text-left p-4 font-bold">
                                        FAC/DEPT
                                    </th>
                                    <th className="text-left p-4 font-bold">
                                        TIME IN
                                    </th>
                                    <th className="text-left p-4 font-bold">
                                        TIME OUT
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-50 ">
                                    <td className="p-4">
                                        1.
                                    </td>
                                    <td className="p-4">
                                        ND/20344
                                    </td>
                                    <td className="p-4 font-bold">
                                        ALISA RHODA
                                    </td>
                                    <td className="p-4">
                                        SCI/COM
                                    </td>
                                    <td className="p-4">
                                        12 : 32
                                    </td>
                                    <td className="p-4">
                                        13 : 02
                                    </td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50 ">
                                    <td className="p-4">
                                        2.
                                    </td>
                                    <td className="p-4">
                                        HND/20224
                                    </td>
                                    <td className="p-4 font-bold">
                                        MAMUD TOBA
                                    </td>
                                    <td className="p-4">
                                        ENG/MEC
                                    </td>
                                    <td className="p-4">
                                        14 : 00
                                    </td>
                                    <td className="p-4">
                                        14 : 20
                                    </td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50 ">
                                    <td className="p-4">
                                        3.
                                    </td>
                                    <td className="p-4">
                                        ND/20114
                                    </td>
                                    <td className="p-4 font-bold">
                                        TUNDE AKIN
                                    </td>
                                    <td className="p-4">
                                        AFS/AHP
                                    </td>
                                    <td className="p-4">
                                        11 : 00
                                    </td>
                                    <td className="p-4">
                                        11 : 24
                                    </td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50 ">
                                    <td className="p-4">
                                        4.
                                    </td>
                                    <td className="p-4">
                                        ND/20234A
                                    </td>
                                    <td className="p-4 font-bold">
                                        TUNDE AKIN
                                    </td>
                                    <td className="p-4">
                                        HRE/AEM
                                    </td>
                                    <td className="p-4">
                                        11 : 20
                                    </td>
                                    <td className="p-4">
                                        11 : 50
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link
                    to={'/live'}
                    class="text-white   bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 
                    dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg  px-6 py-3.5  text-center mr-2 mb-2"> View live results
                </Link>
            </div>
        </section>
    );
}

export default VoterTable;