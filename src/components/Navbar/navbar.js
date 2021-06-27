import React from 'react'
import './estilo.css'
import { Link, animateScroll as scroll } from "react-scroll"; //npm install react-scroll

export default function NavBar(){

    return(
               
               
        <nav className="nav">
            <h3 className="nav__title">
            <Link to="#">Bodybuilding</Link>
            </h3>    
            <ul className="nav-bar">
            <li><Link to="increase1" smooth={true} className="nav-bar__link">Increase 1</Link></li>
            <li><Link to="videos" smooth={true} className="nav-bar__link">Videos</Link ></li>
            <li><Link to="increase2" smooth={true} className="nav-bar__link">Increase 2</Link></li>
            <li><Link to="reviews" smooth={true} className="nav-bar__link">Reviews</Link></li>
        </ul>
        </nav>   
        
    )
}