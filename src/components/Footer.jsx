import Rss from '../images/rss-fill.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Twitter from '../images/twitter.svg'
import Arrow from '../images/arrow.png'
import './styles/Footer.css'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__title">
                <h3>Seguinos en nuestras redes</h3>
                <img src={Arrow} alt="Arrow" />
            </div>
            <div className="footer__social">
                <ul>
                    <li>
                        <a href="/#">
                            <img src={Rss} alt="Icono RSS" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wwww.facebook.com">
                            <img src={Facebook} alt="Icon Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">
                            <img src={Instagram} alt="Icon Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">
                            <img src={Twitter} alt="Icon Twitter" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__copyright">
                <p>Copyright © 2021</p>
            </div>
        </footer>
    )
}

export default Footer