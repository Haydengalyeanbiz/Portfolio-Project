import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../Reveal/Reveal';
import './Projects.css';

const Projects = () => {
	return (
		<motion.div className='project-wrapper'>
			<Reveal>
				<h1>My Projects</h1>
			</Reveal>
			<div className='projects-content'>
				<Reveal></Reveal>
				<div className='project-preview'>
					<iframe
						src='https://api-project-nj9i.onrender.com'
						title='Live Site Preview'
						className='project-iframe'
						frameBorder='0'
						allowFullScreen
					></iframe>
					<p className='project-description'>
						My very first full-stack project called Planetbnb. Front-end was
						built with React and Redux. Backend was built with Express.js and
						Sequelize. Take a look!{' '}
						<a
							className='project-link'
							src='https://api-project-nj9i.onrender.com'
							href='https://api-project-nj9i.onrender.com'
						>
							Planetbnb.com
						</a>
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
