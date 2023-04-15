import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            {/* <div className='footer-top'>
                <h1>Kontakta oss</h1>
                <p>Skicka iväg ett mail så kontaktar vi dig snarast</p>
                <div className='footer-contact-us'>
                    <input placeholder='Företag...' className='footer-input'/>
                    <input placeholder='E-post' className='footer-input'/>
                    <p>Pil</p>
                </div>
            </div>  */}
            <div className='footer-bottom'>
                <div>
                    <h3>Kontakta oss</h3>
                    <p>Mail: kontakt@snackare.se</p>
                    <p>Telefon: +46760149507</p>
                    <p></p>
                </div>
                <div className='follow-us'> 
                    <h3>Följ oss</h3>
                    <ul className='social-media-list'>
                        <li>
                                <FaInstagram/>
                        </li>
                        <li>
                                <FaLinkedin/>
                        </li>
                        <li>
                                <FaFacebook/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
