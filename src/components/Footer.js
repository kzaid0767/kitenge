import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col offset-1">
                        <ul className="list-unstyled">
                            <li className="link-footer"><Link to="/home">Home</Link></li>
                            <li><Link to="/mens">Mens</Link></li>
                            <li><Link to="/womens">Womens</Link></li>
                            <li><Link to="/kids">Kids</Link></li>
                            <li><Link to="/couples">Couples</Link></li>
                            <li><Link to="/wedding">Wedding</Link></li>
                            <li><Link to="/womenbusiness">Women Busines Wear</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col text-center">
                        <a role="button" className="btn btn-link" href="tel:+255718367218"><i className="fa fa-phone" /> 255-718-367218</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> info@vitenge.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;