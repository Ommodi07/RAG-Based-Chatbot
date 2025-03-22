const LeftComponent = () => {
    return (
        <div className="flex flex-col items-center bg-gray-800 w-3/4 h-full">
            <div className="w-full text-center text-3xl bg-gray-900 text-white rounded h-[50px] flex items-center justify-center">
                <h1>AI Chatbot</h1>
            </div>
            <div className="flex-grow w-full bg-gray-800"></div>
            <div className="w-full text-center p-2">
                <InputBox />
            </div>
        </div>
    )
}

const InputBox = () => {
    return (
        <div className="w-full h-12 bg-gray-800 flex items-center px-2">
            <input type="text" placeholder="Type a message" className="flex-grow h-10 bg-black rounded-md p-2 text-white/95" />
            <button className="h-10 bg-cyan-600 rounded-md ml-2 px-4 text-white">Send</button>
        </div>        
    )
}
export default LeftComponent;