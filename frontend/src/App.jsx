import Signup from './components/signup';
import Signin from './components/signin';
import Chatbot from './components/chat';
import Homepage from './components/homepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
