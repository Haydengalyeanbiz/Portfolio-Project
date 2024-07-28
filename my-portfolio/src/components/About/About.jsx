import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../Reveal/Reveal';
import './About.css';
import Lottie from 'react-lottie';
import animationData from '../../lotties/workflow.json';

const About = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div className='about-me-wrapper'>
			<Reveal>
				<h1 className='about-title'>About Me</h1>
			</Reveal>
			<div className='about-content-holder'>
				<motion.div
					className='animation1'
					initial={{ opacity: 0, x: -150 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.25 }}
				>
					<Lottie
						options={defaultOptions}
						height={400}
						width={400}
					/>
				</motion.div>
				<div className='about-words-wrapper'>
					<div className='my-story'>
						<Reveal>
							<h3>My Story</h3>
						</Reveal>
					</div>
					<div className='about-me div1'>
						<Reveal>
							<p>
								Hello! I'm Hayden Galyean, a passionate web developer with a
								knack for creating engaging and dynamic user experiences. With a
								background in Front-End Web Development, I have honed my skills
								in both front-end and back-end development.
							</p>
						</Reveal>
					</div>
					<div className='about-me div2'>
						<Reveal>
							<p>
								My journey into web development began when I purchased my first
								Udemy course in 2019. Since then, I've been dedicated to
								learning and evolving my skill set. I'm proficient in
								technologies such as React, HTML, CSS, JavaScript, SQL, and I
								enjoy working on projects that challenge me to think creatively
								and solve complex problems.
							</p>
						</Reveal>
					</div>
					<div className='about-me div3'>
						<Reveal>
							<p>
								What drives me the most is the ability to bring ideas to life
								through code. Whether it's designing a sleek user interface or
								optimizing back-end processes, I thrive on creating solutions
								that are not only functional but also aesthetically pleasing.
							</p>
						</Reveal>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
