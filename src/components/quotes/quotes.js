import React from 'react'
import './estilo.css'

export default function Quotes(){

    return(

        <section className="quotes" id="reviews">
            <div className="quotes__card">
                <img src="./assets/img/quotes.svg" alt=""/>
                <p className="quotes__text">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected
                    humour.
                </p>
                <h5 className="quotes__author">Jason Scott</h5>
            </div>
            <div className="quotes__card">
                <img src="./assets/img/quotes.svg" alt=""/>
                <p className="quotes__text">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected
                    humour.
                </p>
                <h5 className="quotes__author">Donald Lee</h5>
            </div>
            <div className="quotes__card">
                <img src="./assets/img/quotes.svg" alt=""/>
                <p className="quotes__text">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected
                    humour.
                </p>
                <h5 className="quotes__author">Richard Hall</h5>
            </div>
        </section>

    )
}