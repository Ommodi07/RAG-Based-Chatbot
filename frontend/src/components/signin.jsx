import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <>
            <div className="bg-black h-[775px] flex">
                <div className="w-[400px] h-[500px] rounded-lg shadow-lg mx-auto mt-20 p-6 space-y-10">
                    <div className="flex justify-center items-center">
                        <h1 className="text-white/90 text-3xl font-bold">Signin</h1>
                    </div>
                    <div className="space-y-5">
                        <Inputfield text="Email" />
                        <Inputfield text="Password" />
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <button type="submit" className="h-10 bg-blue-500 rounded-md w-full">Submit</button>
                    </div>
                    <div>
                        <p className="text-white">Don't have account? <Link to="/signup">signup</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Inputfield = (props) => {
    return (
        <>
            <div>
                <p className="text-white">{props.text}</p>
                <input type={props.text === "Password" ? "password" : "text"} placeholder={props.text} className="w-full p-2 rounded-lg bg-gray-300 mt-2" />
            </div>
        </>
    )
}

export default Signin;