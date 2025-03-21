const LeftComponent = () => {
    return (
        <>
            <div className="items-center border-r-black  bg-cyan-100">
                <div className="mx-auto w-full text-center text-3xl bg-cyan-300 text-blue-900 rounded h-[50px]">
                    <h1>AI Chatbot</h1>
                </div>
                <div className="h-[650px] w-full bg-cyan-200">
                </div>
                <div className="w-full text-center">
                    <InputBox />
                </div>
            </div>
        </>
    )
}
const InputBox = () => {
    return (
        <>
            <div className="w-full h-12 bg-white flex justify-center items-center">
                <input type="text" placeholder="Type a message" className="w-[95%] h-10 bg-gray-100 rounded-md p-2" />
                <button className="w-[5%] h-10 bg-cyan-600 rounded-md ml-2">Send</button>
            </div>        
        </>
    )
}
export default LeftComponent;