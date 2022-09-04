import React from 'react'
import Logo from '../images/logo.svg'
import FbIcon from '../images/icon-facebook.svg'
import TwIcon from '../images/icon-twitter.svg'
import PtIcon from '../images/icon-pinterest.svg'
import IgIcon from '../images/icon-instagram.svg'
import { FooterData } from '../utils/FooterData'

const footerLinks = FooterData.map((item, index) => (
  <div className="footer-each" key={index}>
    <p className="footer-each-title">{item.title}</p>
    {item.links.map(each => <p className='footer-each-link'>{each}</p>)}
  </div>
))

const Footer = () => {
  return (
    <>
    <div className="footer-boost">
      <div className="container">
        <p>Boost your links today</p>
        <button className="cyan">Get Started</button>
      </div>
    </div>
    <div className="footer-links">
      <div className="footer-all container">
        <img src={Logo} alt="Shortly Logo" className='footer-all-img' />
        {footerLinks}
        <div className="footer-social">
          <img src={FbIcon} alt="Facebook Icon" />
          <img src={TwIcon} alt="Twitter Icon" />
          <img src={PtIcon} alt="Pinterest Icon" />
          <img src={IgIcon} alt="Instagram Icon" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer