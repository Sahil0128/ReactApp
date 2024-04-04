import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
function Navbar() {
    const [click, setClick]=useState(false);
    const [button, setButton] = useState(true);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                Sahil <i class="fa-solid fa-code"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        SDE
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Product
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
   </>
  )
}

export default Navbar;