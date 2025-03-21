const RightComponent = () => {
    return (
        <>
            <div className="mx-auto w-[500px] h-[700px] bg-gray-600 rounded-lg shadow-lg p-6 space-y-10 items-center">
                <p>Upload PDF here</p>
                <UploadBox/>
            </div>   
        </>
    )
}
const UploadBox = () => {
    return (
        <>
            <div className="w-[400px] h-[200px] bg-gray-300 flex justify-center items-center mx-auto rounded-2xl border-2 border-dashed border-gray-700">
                <input type="file"/>
                <button></button>
            </div>
        </>
    )
}
export default RightComponent;