import React from 'react'
import style from '../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
		<footer className="footer-distributed">

			<div className="footer-right">

				<a href={''}><FontAwesomeIcon icon={faFacebookSquare} /></a>
				<a href={''}><FontAwesomeIcon icon={faTwitterSquare} /></a>
				<a href={''}><FontAwesomeIcon icon={faLinkedin} /></a>
				<a href={''}><FontAwesomeIcon icon={faGithubSquare} /></a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href={''}>Home</a>
					<a href={''}>About</a>
					<a href={''}>Contact</a>
				</p>

				<p className="signature">Made with &hearts; by Fatma <br/> &copy; 2020</p>
			</div>

		</footer>
    )
}

export default Footer
