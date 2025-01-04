import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../Reveal/Reveal';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
	const navigate = useNavigate();
	const projects = [
		{
			title: 'IndyMamaDeals',
			description:
				'IndyMamaDeals is a personal Amazon affiliate website designed for showcasing and advertising handpicked products. The platform leverages the PAAPI5 Amazon API to retrieve detailed product information using an ASIN (Amazon Serial Number) extracted from affiliate links.',
			link: 'https://indymamadeals.com/',
			image: '/images/project-images/amazon-main.png',
		},
		{
			title: '8Bit Gaming',
			description:
				'8Bit is a cutting-edge eCommerce platform designed for gamers and collectors alike. Whether you are browsing for the latest video games or must-have accessories, 8Bit offers a seamless shopping experience. Featuring a sleek, modern interface built with performance and usability in mind, users can explore, review, and purchase their favorite products with ease.',
			link: 'https://eight-bit-ciqo.onrender.com/',
			image: '/images/project-images/8-bit-preview.png',
		},
		{
			title: 'DashDine',
			description:
				'A application inspired from Uber Eats called DashDine. Built with React, Redux, and Python Flask for the backend. It features user authentication, order tracking, and cart functionality.',
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

	const goToLink = (url) => {
		window.location.href = url;
	};

	const { title, description, link, image } = projects[currentProjectIndex];
	return (
		<motion.div className='project-wrapper'>
			<Reveal>
				<h1>My Projects</h1>
			</Reveal>
			<Reveal>
				<div className='projects-content'>
					{projects.map((project, index) => (
						<div
							className='project-structure'
							key={index}
						>
							<h3>{project.title}</h3>
							<img
								className='project-image'
								src={project.image}
								alt=''
							/>
							<p className='project-description'>{project.description}</p>
							<a
								className='project-link'
								href={project.link}
							>
								{' '}
								Check it Out
							</a>
						</div>
					))}
				</div>
			</Reveal>
		</motion.div>
	);
};

export default Projects;
