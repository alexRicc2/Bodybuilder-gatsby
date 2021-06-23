import React from 'react';
import './estilo.css';


export default function sponsor(props){

    if(props.lado === "esquerda"){
        return(

            <section className="sponsor" id="increase1">
                <div className="sponsor__figure">
                    <img src={props.foto} alt="" className="sponsor__image"/>
                </div>
                <div className="sponsor__content">
                    {props.children}
                </div>
            </section>
    
    
        )
    }
    else if(props.lado === "direita"){
        return(

            <section className="sponsor" id="increase2">
                <div className="sponsor__content">
                    {props.children}
                </div>
                <div className="sponsor__figure">
                    <img src={props.foto} alt="" className="sponsor__image"/>
                </div>
            </section>
    
    
        )
    }

    
}