import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-x-4 md:space-x-0 md:items-center">
      <div className="logo p-10">
        <Image
          src="/images/logo.png"
          width={40}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div className="block nav-mid md:my-0 my-4 md:ml-0 ml-4 md:w-auto w-full">
        <div className="flex flex-col items-center">
          <div className="mt-1 text-center">
            <h1 className="text-3xl">LOGO</h1>
          </div>
          <div className="mt-5">
            <ul className="flex flex-row">
              <Link href={'/'}><li className="px-4">SHOP</li></Link>
              <Link href={'/'}><li className="px-4">SKILLS</li></Link>
              <Link href={'/'}><li className="px-4">STORIES</li></Link>
              <Link href={'/'}><li className="px-4">ABOUT</li></Link>
              <Link href={'/'}><li className="px-4">CONTACT US</li> </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-right flex items-center ml-auto h-full pr-10 relative">
        <div className="mr-4">
          <Image
            src="/images/search-normal.png"
            width={30}
            height={40}
          />
        </div>
        <div className="mr-4">
          <Image
            src="/images/shopping-bag.png"
            width={30}
            height={40}
          />
        </div>
        <div className="mr-4">
          <Image
            src="/images/profile.png"
            width={30}
            height={40}
          />
        </div>
        <div className="mr-4">
          <Image
            src="/images/heart.png"
            width={30}
            height={40}
          />
        </div>
        <div className="relative">
          <button className="text-black font-bold py-1 px-3 rounded-lg drop-shadow-md" onClick={toggleDropdown}>
            ENG <span className="ml-1">&#9660;</span> {/* Unicode for down arrow */}
          </button>
          {/* Dropdown content */}
          <div className={`absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md ${dropdownOpen ? '' : 'hidden'}`}>
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Spanish</li>
              {/* Add more languages as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
