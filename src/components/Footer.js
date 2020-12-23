import React from 'react'
import '../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
		<footer className="footer-distributed">

			<div className="footer-right">

				<a><FontAwesomeIcon icon={faFacebookSquare} /></a>
				<a><FontAwesomeIcon icon={faTwitterSquare} /></a>
				<a><FontAwesomeIcon icon={faLinkedin} /></a>
				<a><FontAwesomeIcon icon={faGithubSquare} /></a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a>Help</a>
					<a>About</a>
					<a>Contact</a>
				</p>

				<p className="signature">Made with &hearts; by Fatma <br/> &copy; 2020</p>
			</div>

		</footer>
    )
}

export default Footer
