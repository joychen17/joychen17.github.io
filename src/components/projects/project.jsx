import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import art1 from "../../imgs/art1.png";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, img_file, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						{/* <div className="project-logo">
							<img src={logo} alt="logo" />
						</div> */}
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<img src={img_file} className="artThumbnail"></img>
						{/* <img src={img_file}></img> */}
						{/* <div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div> */}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
