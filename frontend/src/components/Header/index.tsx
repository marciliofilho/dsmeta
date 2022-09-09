import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p id='in-ig'>
                    Desenvolvido por:
                    <a href="https://www.instagram.com/marcilioafilho/">@marcilioafilho.ig</a>
                    <a href="https://www.linkedin.com/in/marcilioafilho/">@marcilioafilho.in</a>
                </p>
            </div>
        </header>
    )
}

export default Header;