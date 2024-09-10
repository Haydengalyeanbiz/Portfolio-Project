import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../Reveal/Reveal';
import './Projects.css';

const Projects = () => {
	const projects = [
		{
			title: '8Bit Gaming',
			description:
				'8Bit is a cutting-edge eCommerce platform designed for gamers and collectors alike. Whether you are browsing for the latest video games or must-have accessories, 8Bit offers a seamless shopping experience. Featuring a sleek, modern interface built with performance and usability in mind, users can explore, review, and purchase their favorite products with ease.',
			link: 'https://eight-bit-ciqo.onrender.com/',
			image: '/images/project-images/homepagegif.gif',
		},
		{
			title: 'DashDine',
			description:
				'A application inspired from Uber Eats called DashDine. Built with React, Redux, and Node.js for the backend. It features user authentication, order tracking, and cart functionality.',
			link: 'https://dashdine-0s4v.onrender.com/',
			image: '/images/project-images/dashdine_home.gif',
		},
		{
			title: 'Planetbnb',
			description:
				'An intergalactic twist on vacation rentals, where users can book stays on far-off planets. Powered by React and Redux, this project is a testament to my ability to combine technical skills with out-of-this-world creativity.',
			link: 'https://api-project-nj9i.onrender.com',
			image: '/images/project-images/planet-bnb.png',
		},
	];

	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

	const handleNext = () => {
		setCurrentProjectIndex((prevIndex) =>
			prevIndex === projects.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setCurrentProjectIndex((prevIndex) =>
			prevIndex === 0 ? projects.length - 1 : prevIndex - 1
		);
	};

	const { title, description, link, image } = projects[currentProjectIndex];
	return (
		<motion.div className='project-wrapper'>
			<Reveal>
				<h1>My Projects</h1>
			</Reveal>
			<Reveal>
				<div className='projects-content'>
					<Reveal>
						<div className='project-preview'>
							<img
								src={image}
								alt={title}
								className='project-image'
							/>
							<p className='project-description'>
								<strong>{title}</strong> - {description}{' '}
								<a
									className='project-link'
									href={link}
									target='_blank'
									rel='noopener noreferrer'
								>
									Check it out
								</a>
							</p>
						</div>
					</Reveal>
					<div className='carousel-controls'>
						<button
							onClick={handlePrev}
							className='carousel-button'
						>
							Previous
						</button>
						<button
							onClick={handleNext}
							className='carousel-button'
						>
							Next
						</button>
					</div>
				</div>
			</Reveal>
		</motion.div>
	);
};

export default Projects;
