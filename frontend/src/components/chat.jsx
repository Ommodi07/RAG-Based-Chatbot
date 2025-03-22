import RightComponent from "./rightcomponent";
import LeftComponent from "./leftcomponent";

const Chatbot = () => {
    return (
        <div className="flex w-full h-screen space-x-4 bg-black">
            <RightComponent />
            <LeftComponent />
        </div>
    );
};

export default Chatbot;