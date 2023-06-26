import { Link } from 'gatsby';
import React,  { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
//import logo from '../assets/images/logo.svg';
import logo from '../assets/images/logo/bold.png';

const Navbar = () => {

    //set default show state to be true
    const [ show, setShow ] = useState(false);

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='gong cha'/>
                    </Link>
                    <button className='nav-btn' onClick={() => setShow(!show)}>
                        <FiAlignJustify></FiAlignJustify>
                    </button>
                </div>
                <div className={ show ? 'nav-links show-links' : 'nav-links' }>
                    <Link 
                        to='/' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={() => setShow(false)}
                    >
                        home
                    </Link>
                    <Link 
                        to='/order' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={() => setShow(false)}
                    >
                        Online Order
                    </Link>
                    <Link 
                        to='/locations' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={() => setShow(false)}
                    >
                        Locations
                    </Link>
                    <Link 
                        to='/news' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={() => setShow(false)}
                    >
                        News
                    </Link>
                    <Link 
                        to='/about' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={() => setShow(false)}
                    >
                        about
                    </Link>
                    <div className='nav-link contact-link'>
                        <a 
                            href='/contact' 
                            className='btn'
                        >
                            contact
                        </a>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
