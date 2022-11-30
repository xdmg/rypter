import './App.css';
import Navbar from './Navbar.js';
import Body from "./Body";
import LoginModal from "./LoginModal";
import {useState} from "react";


function App() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="w-full h-full flex justify-center text-white">
            { openModal && <LoginModal closeModal={setOpenModal} />}
            <Navbar login={setOpenModal} />
            <Body/>
        </div>
    );
}

export default App;
