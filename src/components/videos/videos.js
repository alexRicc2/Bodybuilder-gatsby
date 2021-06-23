import React from 'react'
import imagem3 from '../../assets/images/img3.jpg'
import imagem4 from '../../assets/images/img4.jpg'
import imagem5 from '../../assets/images/img5.jpg'
import './estilo.css'

export default function Videos(){

    return(
        <section className="videos" id="videos">
            <h4 className="videos__title">Recent videos</h4>
            <div className="videos__content">
                <div className="videos__card">
                    <img className="videos__card___image" src={imagem3} alt="video"/>
                    <h6 className="videos__card___title">Lorem Ipsum is simply dummy text of
                    the printing</h6>
                </div>
                <div className="videos__card">
                    <img className="videos__card___image" src={imagem4} alt="Video"/>
                    <h6 className="videos__card___title">Lorem Ipsum is simply dummy text of
                    the printing</h6>
                </div>
                <div className="videos__card">
                    <img className="videos__card___image" src={imagem5} alt="Video"/>
                    <h6 className="videos__card___title">Lorem Ipsum is simply dummy text of
                    the printing</h6>
                </div>
            </div>
        </section>
    )
}