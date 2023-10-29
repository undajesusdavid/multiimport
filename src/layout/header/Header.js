import React, {useState} from "react";
import "./Header.css";
import {FaBars,FaUserCircle,FaShoppingCart,FaTimes} from 'react-icons/fa';

const Header = () => {

	const [statusMenu, setEstatusMenu] = useState(false);

    return (
        <header>
			<div className="wrapper-icon-menu">
				<FaBars className='icon-menu' onClick={() => setEstatusMenu(true) } /> 
			</div>
			<div className='menu-logo'>
				<img src="./logo.png" className="logo"/>
				<h1 className="name-web">MultiImport</h1>
				<ul className='navigation'>
					<li><a href='#'>Frenos</a></li>
					<li><a href='#'>Repuestos</a></li>
					<li><a href='#'>Servicios</a></li>
					<li><a href='#'>Contactanos</a></li>
				</ul>
			</div>
			<div class="others">
				<FaUserCircle className='icon' />
				<FaShoppingCart className='icon' />
			</div>
			<nav className={statusMenu === false ? "movil-navigation hide-menu":"movil-navigation show-menu"} >
				<div className="head-menu">
					<FaTimes className="icon" onClick={() => setEstatusMenu(false)} />
				</div> 	
				<ul>
					<li><a href='#'>Frenos</a></li>
					<li><a href='#'>Repuestos</a></li>
					<li><a href='#'>Servicios</a></li>
					<li><a href='#'>Contactanos</a></li>
				</ul>
			</nav>
			
		</header>
    );

} 


export default Header;