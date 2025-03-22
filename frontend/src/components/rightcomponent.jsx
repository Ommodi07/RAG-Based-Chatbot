const RightComponent = () => {
    return (
        <>
            <div className="w-1/4 h-full bg-cyan-300 rounded-lg shadow-lg p-6 flex-col items-center">
                <p className="text-white">Upload PDF here</p>
                <UploadBox />
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md w-[300px]">Upload</button>
            </div>
        </>
    )
}

const UploadBox = () => {
    return (
        <>
            <div className="w-[300px] h-[150px] bg-cyan-100 flex justify-center items-center rounded-2xl border-2 border-dashed border-gray-700 mt-4">
                <div>
                    <input type="file"/>
                </div>
            </div>
        </>
    )
}
export default RightComponent;