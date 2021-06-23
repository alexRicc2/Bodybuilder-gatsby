import React from 'react';
import './estilo.css';
import NavBar from '../Navbar/navbar'
import {FaCheckSquare} from 'react-icons/fa';
import valida from '../../assets/js/validaRegex'

export default function Header(){

    
    return(

        <header className="header">
            <NavBar/>
            <div className="promo">
                <h4 className="promo__title">Everything you need to chisel your muscle</h4>
                <div className="promo__card">
                    <div className="promo__card___title">Get started now</div>
                    <form className="promo__form" data-form>
                        <input type="text" className="promo__form___name" placeholder="Full Name" required data-form-nome></input>
                        <input type="email" className="promo__form___email" placeholder="Email Address" required data-form-email></input>
                        <input type="phone" className="promo__form___phone" placeholder="Phone Number" required data-form-numero></input>
                        <input type="text" required className="promo__form___zip" placeholder="Zip Code" data-form-zip></input>
                        <button type="submit" className="promo__form___button" id="promo__form__envia" data-form-botao onSubmit={valida}>Sign up</button>
                    </form>
                </div>
                <div className="promo__advantages">
                    <ul className="promo__advantages___list">
                        <li className="promo__advantages___item">
                            <FaCheckSquare className="icone"/>
                            Build and sustains muscle
                        </li>
                        <li className="promo__advantages___item">
                            <FaCheckSquare className="icone"/>
                            Performance enhancing
                        </li>
                        <li className="promo__advantages___item">
                            <FaCheckSquare className="icone"/>
                            Feel stronger
                        </li>
                    </ul>
                </div>
            </div> 
              
        </header>
    )
}