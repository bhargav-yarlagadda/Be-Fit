import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <div className="p-4 max-w-96 flex justify-between">
      <Link to={'/'}>
        <img src={Logo} className="w-10 h-10" alt="Logo" />
      </Link>

      <div className="flex md:gap-10 gap-5 justify-around">
      <div className="relative group">
        <Link to={'/'} >
          Home
        </Link>
          <div className="w-5 h-[2px] bg-red-900 rounded-md transition-all duration-300 ease-in-out group-hover:w-full"></div>
        </div>
        <div className="relative group">
          <a href="#exercise" className="">
            Exercise
          </a>
          <div className="w-5 h-[2px] bg-red-900 rounded-md transition-all duration-300 ease-in-out group-hover:w-full"></div>
        </div>
      </div> 
    </div>
  );
};

export default Navbar;
