import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = () => {
    // Functionality to handle search
  };

  return (
    <nav className="bg-secondary-700  p-2 relative border-b-2 border-primary-800">
      <div className="flex items-center justify-between gap-16 mr-4 ml-4">
        {/* Logo */}
        <i className="text-white text-4xl hover:text-secondary-100 font-bold font-logo cursor-pointer">ServiFast</i>
        
        {/* Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button className="text-white hover:text-secondary-50" onClick={toggleMenu}>
            <MenuIcon />
          </button>
        </div>

        {/* Search */}
        <div className="flex-grow mx-4 hidden md:flex ">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="text-secondary-700 cursor-pointer hover:text-secondary-50" onClick={handleSearch} />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-secondary-800"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Public Dropdown for Desktop */}
       <div className="relative md:flex hidden flex-col items-center">
            <button className="text-white hover:text-secondary-50 flex items-center justify-between cursor-pointer w-full" onClick={toggleDropdown}>
                Publicar
                <ArrowDropDownIcon className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}/>
            </button>
            {dropdownOpen && (
                <div className='bg-secondary-700 bg-opacity-80 absolute top-11 flex flex-col items-start rounded p-2 shadow-lg'>
                    <ul className='mr-4 ml-4'>
                        <li className="py-2 text-center text-sm"><a className="text-white hover:text-secondary-50 cursor-pointer">Servicio</a></li>
                        <li className="py-2 text-center text-sm"><a className="text-white hover:text-secondary-50 cursor-pointer">Requerimiento</a></li>
                    </ul>
                </div>
            )}
       </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 gap-3 mr-2">
          <button className="text-white  hover:text-secondary  cursor-pointer"><PinDropIcon /></button>
          <button className="text-white  hover:text-secondary  cursor-pointer"><HomeIcon /></button>
          <button className="text-white  hover:text-secondary  cursor-pointer"><FavoriteBorderTwoToneIcon /></button>
          <button className="text-white  hover:text-secondary  cursor-pointer"><PersonIcon /></button>
          <button className="text-white hover:text-secondary cursor-pointer"><LogoutIcon /></button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="relative mt-2 mb-4">
            <input
              type="text"
              className="block w-full p-2 pl-10 text-base border border-gray-300 rounded focus:outline-none focus:border-secondary-800"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="text-secondary-700 cursor-pointer hover:text-secondary-50" onClick={handleSearch} />
            </div>
          </div>
          <ul className="flex flex-col items-center">
            <li className="py-2"><a className="text-white hover:text-secondary-50 cursor-pointer">Home</a></li>
            <li className="py-2"><a className="text-white hover:text-secondary-50 cursor-pointer">Perfil</a></li>
            <li className="py-2 relative flex flex-col items-center">
                <button className="text-white hover:text-secondary-50 flex items-center justify-between cursor-pointer w-full" onClick={toggleDropdown}>
                    Publicar
                    <ArrowDropDownIcon className={` transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}/>
                </button>
                {dropdownOpen && (
                    <div className='bg-secondary-600 text-white absolute top-10 flex-col items-start rounded p-2 shadow-lg'>
                        <ul className=''>
                            <li className="py-2 text-center text-sm"><a className="text-white hover:text-secondary-50 cursor-pointer">Servicio</a></li>
                            <li className="py-2 text-center text-sm"><a className="text-white hover:text-secondary-50 cursor-pointer">Requerimiento</a></li>
                        </ul>
                    </div>
                )}
            </li>
            <li className="py-2"><a className="text-white hover:text-secondary cursor-pointer">Ubicacion</a></li>
            <li className="py-2"><a className="text-white hover:text-secondary cursor-pointer">Log Out</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
