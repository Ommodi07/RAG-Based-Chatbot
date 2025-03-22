import RightComponent from "./rightcomponent";
import LeftComponent from "./leftcomponent";

const Chatbot = () => {
    return (
        <div className="flex w-full h-screen p-4 space-x-4">
            <RightComponent />
            <LeftComponent />
        </div>
    );
};

export default Chatbot;