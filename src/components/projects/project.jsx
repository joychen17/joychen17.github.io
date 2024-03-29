import React from "react";
import ReactModal from 'react-modal';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./styles/project.css";

const popupStyle = {
	content: {
		top: '0%',
		left: '0%',
		right: 'auto',
		bottom: 'auto',
		height: '100%',
		width: '100%',
		background: 'rgba(0,0,0,0.9)',
		outline: 'none',
		position: 'relative',
		text_align: 'center',
	},
};

const imageStyle = {
	height: '80%',
	width: 'auto',
	margin: 'auto',
	padding: '5% 0 5% 0',
	display: 'block',
	background: 'none',
};

const Project = (props) => {
	const { logo, title, description, img_file, linkText, link } = props;

	const [isOpen, setIsOpen] = useState(false);
	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<img src={img_file} className="artThumbnail" onClick={setIsOpen}></img>
						<ReactModal
							isOpen={isOpen}
							contentLabel="Example Modal"
					 		onRequestClose={() => setIsOpen(false)}
							style={popupStyle}
						>
							<img src={img_file} 
								style={imageStyle}
								onClick={() => setIsOpen(false)}
							>
							</img>
						</ReactModal>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
