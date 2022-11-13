import './Navbar.css';
import './App.css';
import { MagnifyingGlassCircleIcon,MegaphoneIcon,SparklesIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Logo from './rypter-logo.png';

const Navbar = () => {
    const searchPlaceholder = "Search for different people, posts, or boards..."
   return (
       <header className="navbar flex justify-center items-center">
           <div className="navbar-left flex h-full items-center flex-1">
               <div className="navbar-logo h-full border-r border-gray border-opacity-0 flex items-center px-14">
                   <img src={Logo} alt="" className="h-7"/>
               </div>
               <button className="navbar-links h-10 py-2 px-4 ml-10 mr-5 text-gray font-bold flex justify-center items-center rounded-xl"><MegaphoneIcon className="h-6 mr-1 text-purple"/><span className="pr-1">Post</span></button>
               <button className="navbar-links h-10 py-2 px-4 mr-10 text-gray font-bold flex justify-center items-center rounded-xl"><SparklesIcon className="h-6 mr-1 text-purple"/><span className="pr-1">Discover</span></button>
           </div>
           <div className="navbar-search-container flex justify-center items-center">
               <form action="" className="w-full flex items-center text-gray">
                   <MagnifyingGlassCircleIcon className="h-7 w-7 mr-3"/>
                   <input type="" className="navbar-search-bar bg-transparent border-none outline-none text-gray" placeholder={searchPlaceholder}/>
               </form>
           </div>
           <div className="flex justify-end navbar-account mr-10 flex-1">
               <button className="navbar-account-container flex justify-center items-center text-gray flex">
               {/*<div className="navbar-account-container flex justify-center items-center text-gray">*/}
                   <UserCircleIcon className="h-6 pr-1 text-gray"/>
                   <p className="text-gray px-1">Manage Account</p>
               {/*</div></button>*/}
               </button>
           </div>
       </header>
   );
};

export default Navbar;