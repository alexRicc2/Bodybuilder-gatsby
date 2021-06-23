import React from "react"
import Header from "../components/header/header"
import Sponsor from "../components/sponsor/sponsor"
import Videos from "../components/videos/videos"
import Quotes from "../components/quotes/quotes"
import Footer from "../components/footer/footer"

import "../assets/js/validaRegex"
import imagem2 from "../assets/images/img2.jpg"
import imagem6 from "../assets/images/img6.jpg"

import '../assets/css/reset.css'
import '../assets/css/normalize.css'
import '../assets/css/style.css'


export default function Home() {
  return (
        <div className="app">
          <Header/>
          
          <Sponsor foto={imagem2} lado="esquerda">
                <h4>Increase muscle gain and mantain it</h4>
                <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected
                humour.</p>
                <p>Randomized words which don't look slightly believable. If you
                are going to use a passage of Lorem Ipsum, you need to be sure
                isn't anything embarassing hidden in the middle of the text. All
                the Lorem Ipsum generators on the Internet tend to repeat predefined.
                It use a dictionary of over 200 Latin words, combined.</p>
        </Sponsor>
        <Videos/>
        <Sponsor foto={imagem6} lado="direita">
                <h4>Increase muscle gain and mantain it</h4>
                <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected
                humour.</p>
                <p>Randomized words which don't look slightly believable. If you
                are going to use a passage of Lorem Ipsum, you need to be sure
                isn't anything embarassing hidden in the middle of the text. All
                the Lorem Ipsum generators on the Internet tend to repeat predefined.
                It use a dictionary of over 200 Latin words, combined.</p>
        </Sponsor>
        <Quotes/>
        <Footer/>
        
        
      </div>
  )
}
