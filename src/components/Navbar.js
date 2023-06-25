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
                        to='/menu' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={() => setShow(false)}
                    >
                        menu
                    </Link>
                    <Link 
                        to='/order' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={() => setShow(false)}
                    >
                        Online-Order
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
                        <Link 
                            to='/contact' 
                            className='btn' 
                        >
                            contact
                        </Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
