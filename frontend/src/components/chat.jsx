import RightComponent from "./rightComponent";
import LeftComponent from "./leftComponent";

const Chatbot = () => {
    return (
        <div className="flex w-full h-screen p-4 space-x-4">
            <RightComponent />
            <LeftComponent />
        </div>
    );
};

export default Chatbot;