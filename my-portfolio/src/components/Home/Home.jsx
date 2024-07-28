import React, { useEffect } from 'react';
import './Home.css';
import Reveal from '../Reveal/Reveal';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import backgroundAnimation from '../../lotties/background.json';

const Home = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: backgroundAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div className='home-wrapper'>
			<div className='background-ele'>
				<Lottie
					options={defaultOptions}
					height='100%'
					width='100%'
					isClickToPauseDisabled={true}
					speed={0.3}
				/>
			</div>
			<div className='background-image'>
				<motion.img
					className='main-image'
					src='/images/main-background.JPEG'
					alt='Background'
				/>
			</div>
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
					<motion.button className='button work-btn'>My Work</motion.button>
				</div>
			</div>
		</div>
	);
};

export default Home;
