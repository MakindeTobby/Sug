import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const [matNo, setMatNo] = useState("");
    const handleLogin = (e) => {
        e.preventDefault()
        if (matNo === "HND/100") {
            navigate('/vote-page')

        } if (matNo === "HND/200") {
            navigate('/voter-table')

        }

        else {
            Swal.fire(
                "Matric number not found",
                "",
                "error"
            )
        }
    }
    return (

        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
            <h1 className="font-bold text-2xl text-center">Welcome to <br /> <b>OYSCATECH SUG ELECTION</b> :)</h1>
            <form onSubmit={handleLogin} className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action>
                <label className="font-bold" htmlFor="usernameField">MATRIC NUMBER</label>
                <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                    placeholder="HND/**/**" onChange={e => setMatNo(e.target.value)}
                    type="text" required />
                {/* <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" /> */}
                <button type="submit" className="flex items-center justify-center h-12 px-6 w-64 bg-teal-600 mt-8 rounded font-semibold text-sm text-teal-100 hover:bg-teal-700"

                >Login with matric Number</button>
                <div className="flex mt-6 justify-center text-xs">
                    <a className="text-teal-400 hover:text-teal-500" href="#">Register With Matric Number</a>
                    <span className="mx-2 text-gray-300">/</span>
                    <a className="text-teal-400 hover:text-teal-500" href="#">Report An Error</a>
                </div>
            </form>
        </div>
    );
}

export default Login;