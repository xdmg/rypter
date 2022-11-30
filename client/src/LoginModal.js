import './LoginModal.css';
import {EnvelopeIcon, KeyIcon} from "@heroicons/react/24/outline";
import {ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import Logo from './rypter-logo.png';
import {useState} from "react";

const LoginModal = ({closeModal}) => {
    const [register, setRegister] = useState(false);

    if (!register) {
        return (
            <div onClick={() => {
                closeModal(false);
            }} className="overlay">
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className="container">
                    <div className="container-image"><img src={Logo} alt="" className=""/></div>
                    <form action="">
                        <div className="container-input pl-3 flex justify-center items-center">
                            <EnvelopeIcon className="sendIcon h-7 w-7 mr-7"/>
                            <input type=""
                                   className="container-input-bar bg-transparent border-none outline-none text-gray"
                                   placeholder="Email"/>
                        </div>
                        <div className="container-input flex justify-center items-center">
                            <KeyIcon className="sendIcon h-7 w-7 mr-7"/>
                            <input type=""
                                   className="container-input-bar bg-transparent border-none outline-none text-gray"
                                   placeholder="Password"/>
                        </div>
                        <button className="container-button">
                            <div className="button-contents flex flex-row align-center items-center justify-center">
                                <p>LOGIN</p> <ArrowRightCircleIcon className="ml-2 w-6"/>
                            </div>
                        </button>
                    </form>
                    <div className="sign-google">
                        <button className="google-container-button">
                            <div
                                className="google-button-contents flex flex-row align-center items-center justify-center">
                                <p>SIGN-IN WITH GOOGLE</p> <ArrowRightCircleIcon className="ml-2 w-6"/>
                            </div>
                        </button>
                    </div>
                    <div onClick={() => {setRegister(true);}} className="register">
                        <button className="register-button">
                            Don't have an account? <span>REGISTER</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div onClick={() => {
            closeModal(false);
        }} className="overlay">
            <div onClick={(e) => {
                e.stopPropagation();
            }} className="container">
                <div className="container-image"><img src={Logo} alt="" className=""/></div>
                <form action="">
                    <div className="container-input pl-3 flex justify-center items-center">
                        <EnvelopeIcon className="sendIcon h-7 w-7 mr-7"/>
                        <input type=""
                               className="container-input-bar bg-transparent border-none outline-none text-gray"
                               placeholder="Email"/>
                    </div>
                    <div className="container-input flex justify-center items-center">
                        <KeyIcon className="sendIcon h-7 w-7 mr-7"/>
                        <input type=""
                               className="container-input-bar bg-transparent border-none outline-none text-gray"
                               placeholder="Password"/>
                    </div>
                    <button className="container-button">
                        <div className="button-contents flex flex-row align-center items-center justify-center">
                            <p>REGISTER</p> <ArrowRightCircleIcon className="ml-2 w-6"/>
                        </div>
                    </button>
                </form>
                <div className="sign-google">
                    <button className="google-container-button">
                        <div
                            className="google-button-contents flex flex-row align-center items-center justify-center">
                            <p>REGISTER WITH GOOGLE</p> <ArrowRightCircleIcon className="ml-2 w-6"/>
                        </div>
                    </button>
                </div>
                <div className="register">
                    <button onClick={() => {setRegister(false);}} className="register-button">
                        Don't have an account? <span>LOGIN</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
