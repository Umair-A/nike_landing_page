import React from 'react';
import headerlogo from "../assets/images/header-logo.svg";
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
              <img src={headerlogo} alt='header-logo' width={130} height={40} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
               {navLinks.map((links) => (
                    <li key={links.href}>
                        <a href={links.href} className='font-montserrat text-lg leading-normal text-slate-gray'>{links.label}</a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='header-logo' width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav