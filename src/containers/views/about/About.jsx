import React from 'react';
import Banner from '../../../components/common/banner';
import About1 from "../../../img/about1.png";
import About2 from "../../../img/about2.png";
import About3 from "../../../img/about3.png";
import "./About.css"

const About = () => {


  return (
    <>
      <Banner />
      <div className="container">
        <div className="content">
          <div className="img" >
            <img src={About1} alt="Logo" />
          </div>
          <div className="textInfo">
            <span className="textTitle">Our Story</span>
            <div className="text">NOOSA-Amsterdam was founded in 2009 by two Dutch designers, Alette Zeilstra and Natalie Magnus.The name NOOSA itself appeared thanks to the town of the same name in Australia, which deeplyimpressed both girls with its atmosphere and authenticity. Together, they created a line of combinable accessories to convey to others the magic of world artifacts, cultures and legends.</div>
          </div>

        </div>

        <div className="content">
          <div className="textInfo2">
            <span className="textTitle2">Our Products</span>
            <div className="text2">NOOSA-Amsterdam - bracelets, belts, wallets, bags, sandals, which are equipped with a convenient rivet system. You create your own unique style using a collection of buttons: they can be easily changed, added, combined. Each button reflects a specific culture, carries a unique meaning, and you can mix and match as you like.</div>
            <div className="img2" >
              <img src={About2} alt="Logo" />
            </div>
          </div>

        </div>
        <div className="content">
          <div className="img" >
            <img src={About3} alt="Logo" />
          </div>
          <div className="textInfo">
            <span className="textTitle">Our Socials</span>
            <div className="text">NOOSA-Amsterdam - bracelets, belts, wallets, bags, sandals, which are equipped with a convenient rivet system. You create your own unique style using a collection of buttons: they can be easily changed, added, combined. Each button reflects a specific culture, carries a unique meaning, and you can mix and match as you like.</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About;