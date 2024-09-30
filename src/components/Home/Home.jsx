import React, { useEffect } from 'react';
import './Home.css';
import Reveal from '../Reveal/Reveal';
import { motion } from 'framer-motion';

const Home = ({ handleSetSelected }) => {
	return (
		<div className='home-wrapper'>
			<div className='background-ele'></div>
			<div className='home-content'>
				<div className='home-titles'>
					<Reveal>
						<h1>I'm Hayden Galyean</h1>
					</Reveal>
					<Reveal>
						<p className='home-p'>Your full-stack solution</p>
					</Reveal>
				</div>
				<div className='button-holder'>
					<motion.button
						className='button'
						onClick={() => handleSetSelected('contact')}
						animate={{
							boxShadow: [
								'0px 0px 20px var(--accent-light-clr)',
								'0px 0px 40px var(--accent-light-clr)',
								'0px 0px 20px var(--accent-light-clr)',
							],
						}}
						transition={{
							duration: 2,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'loop',
						}}
					>
						Contact Me
					</motion.button>
					<motion.button
						className='button work-btn'
						onClick={() => handleSetSelected('projects')}
					>
						My Work
					</motion.button>
					<motion.button className='download-link'>
						<a
							href='/resume/HaydenGalyeanResumeRevised.pdf'
							download='HaydenGalyeanResumeRevised.pdf'
							className='inside-btn'
						>
							Download Resume
						</a>
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default Home;
