import { Link } from "react-router-dom";
const Homepage = () => {
    return (
        <>
            <div className="mx-auto items-center flex">
                <div className="items-center flex mx-auto pt-44">
                    <div className="text-center w-20 bg-blue-300 rounded-2xl h-8">
                        <p className="text-center text-xl text-blue-900">
                            <Link to="/signin">Signin</Link>
                        </p>
                    </div>
                    <div className="text-center w-20 bg-blue-300 rounded-2xl h-8">
                        <p className="text-center text-xl text-blue-900">
                            <Link to="/signup">Signup</Link>
                        </p>
                    </div>
                    <div className="text-center w-40 bg-blue-300 rounded-2xl h-8">
                        <p className="text-center text-xl text-blue-900">
                            <Link to="/chat">Let's talk with AI</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage