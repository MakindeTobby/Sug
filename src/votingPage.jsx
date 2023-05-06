import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const VotingPage = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const navigate = useNavigate();
    const handleCheckboxChange = (checkboxNumber) => {
        if (checkboxNumber === 1) {
            setIsChecked1(true);
            setIsChecked2(false);
        } else {
            setIsChecked1(false);
            setIsChecked2(true);
        }
    };
    const handleSubmit = () => {
        if (isChecked1 || isChecked2 === false) {
            Swal.fire(
                "Select a candidate",
                "Or",
                "info"

            )
        }
        Swal.fire({
            title: 'Confirm Submission?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#008080',
            cancelButtonColor: '#d33',
            confirmButtonText: "Yes, I'm done!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Submitted',
                    'Thank You',
                    'success'
                )
                navigate('/')
            }
        })
    }
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-center p-2">
                <h1 className="text-white font-extrabold text-4xl">OYSCATECH SUG ELECTION</h1>
            </div>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-teal-800 capitalize lg:text-4xl dark:text-white">Voting in progress...</h1>
                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Select a candidate of choice for the corresponding listed positions below by checking the box ✔ beside each candidate.
                    Then click on the submit button to submit your list..
                </p>

                <div className="mt-8  xl:mt-8">
                    <p className="uppercase font-bold ">President</p>
                    <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2 xl:grid-cols-4">
                        <div
                            className={`flex p-2 items-center justify-between bg-gray-300 transition-colors duration-200 transform cursor-pointer group ${isChecked1 ? "bg-gray-300 " : ""
                                } rounded-xl`}
                        >
                            <img
                                className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300"
                                src="/man.png"
                                alt=""
                            />
                            <div>
                                <h1 className="text-2xl font-semibold  capitalize">
                                    Ariyo Jide
                                </h1>
                            </div>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-none outline-none"
                                checked={isChecked1}
                                onChange={() => handleCheckboxChange(1)}
                            />
                        </div>
                        <div
                            className={`flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer bg-gray-300 group ${isChecked2 ? " bg-gray-300" : ""
                                } rounded-xl`}
                        >
                            <img
                                className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300"
                                src="/man.png"
                                alt=""
                            />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                                    Mujib Kunle
                                </h1>
                            </div>
                            <input
                                type="checkbox"
                                className="w-8 h-8"
                                checked={isChecked2}
                                onChange={() => handleCheckboxChange(2)}
                            />
                        </div>
                    </div>

                </div>
                <div className="mt-8  xl:mt-8">
                    <p className="uppercase font-bold ">Vice President</p>
                    <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-300 rounded-xl">
                            <img className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300" src="/man.png" alt />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize">Ola Bola</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <input type="checkbox" className="w-8 h-8 border-none outline-none" name="" id="" />
                        </div>



                    </div>
                </div>
                <div className="mt-8  xl:mt-8">
                    <p className="uppercase font-bold ">Gen Sec</p>
                    <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-300 rounded-xl">
                            <img className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300" src="/man.png" alt />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize">Paul Killa</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <input type="checkbox" className="w-8 h-8 border-none outline-none" name="" id="" />
                        </div>



                    </div>
                </div>
                <div className="mt-8  xl:mt-8">
                    <p className="uppercase font-bold ">Treasurer</p>
                    <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-300 rounded-xl">
                            <img className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300" src="/man.png" alt />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize">Ramon K.</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <input type="checkbox" className="w-8 h-8 border-none outline-none" name="" id="" />
                        </div>



                    </div>
                </div>
                <div className="mt-8  xl:mt-8">
                    <p className="uppercase font-bold ">Fin. Sec</p>
                    <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-300 rounded-xl">
                            <img className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300" src="/man.png" alt />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize">Kola Mide</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <input type="checkbox" className="w-8 h-8 border-none outline-none" name="" id="" />
                        </div>



                    </div>
                </div>
                <div className="mt-8  xl:mt-8">
                    <p className="uppercase font-bold ">P.R.O</p>
                    <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-300 rounded-xl">
                            <img className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300" src="/man.png" alt />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize">Ade Bola</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <input type="checkbox" className="w-8 h-8 border-none outline-none" name="" id="" />
                        </div>



                    </div>
                </div>
                <div className="mt-8  xl:mt-8">
                    <p className="uppercase font-bold ">Social Dir.</p>
                    <div className="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-2 items-center justify-between transition-colors duration-200 transform cursor-pointer group bg-gray-300 rounded-xl">
                            <img className="object-cover w-12 h-12 rounded-full ring-4 ring-gray-300" src="/man.png" alt />
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize">Seun Tola</h1>
                                {/* <p className=" text-gray-500 capitalize dark:text-gray-300 ">Agric. Eng</p> */}

                            </div>
                            <input type="checkbox" className="w-8 h-8 border-none outline-none" name="" id="" />
                        </div>



                    </div>
                </div>
                <div className="flex items-center justify-center">

                    <button type="button" onClick={handleSubmit}
                        class="text-white w-32  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 
                    dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg  px-6 py-3.5  text-center mr-2 mb-2"> Submit
                    </button>
                </div>
            </div>
        </section>

    );
}

export default VotingPage;