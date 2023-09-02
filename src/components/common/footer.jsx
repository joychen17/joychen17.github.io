import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				{/* <div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/work">Work</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Publications</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Art</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div> */}

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Joy Chen. Based on theme by Tharindu.dev
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
