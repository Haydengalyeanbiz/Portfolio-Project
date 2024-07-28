import React, { useState } from 'react';
import Reveal from '../Reveal/Reveal';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import JavascriptAnimation from '../../lotties/js.json';
import PythonAnimation from '../../lotties/python.json';
import CssAnimation from '../../lotties/css.json';
import react from '../../assets/react.svg';
import './Skills.css';

const getDefaultOptions = (animationData) => ({
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
});

export const Skills = () => {
	const [hoveredSkill, setHoveredSkill] = useState(null);

	const skills = [
		{
			name: 'JavaScript',
			description:
				'I use JavaScript for web development, enabling interactive and dynamic content. Using JavaScript I can create back-end routes and manipulate front-end DOM elements.',
			animation: (
				<Lottie
					options={getDefaultOptions(JavascriptAnimation)}
					height={100}
					width={100}
				/>
			),
		},
		{
			name: 'React',
			description:
				'Using React and Redux, I build dynamic and responsive web applications. I focus on creating seamless user experiences with efficient state management.',
			animation: (
				<motion.img
					style={{ height: 80, padding: '1rem' }}
					src={react}
					alt='React'
					animate={{ rotate: 360 }}
					transition={{
						repeat: Infinity,
						repeatType: 'loop',
						duration: 10,
						ease: 'linear',
					}}
				/>
			),
		},
		{
			name: 'Python',
			description:
				'I use Python for developing robust back-end systems and automating tasks. Its extensive libraries allow me to handle data processing and web development efficiently.',
			animation: (
				<Lottie
					options={getDefaultOptions(PythonAnimation)}
					height={120}
					width={120}
				/>
			),
		},
		{
			name: 'CSS',
			description:
				'CSS is essential for designing visually appealing and user-friendly web pages. I use it to customize layouts, animations, and ensure a responsive design across devices.',
			animation: (
				<Lottie
					options={getDefaultOptions(CssAnimation)}
					height={100}
					width={100}
				/>
			),
		},
	];

	return (
		<div className='skills-wrapper'>
			<Reveal>
				<h1>My Skills</h1>
			</Reveal>
			<div className='skills-content'>
				{skills.map((skill, index) => (
					<motion.div
						key={index}
						className='skill'
						onHoverStart={() => setHoveredSkill(index)}
						onHoverEnd={() => setHoveredSkill(null)}
						animate={{
							opacity:
								hoveredSkill === null || hoveredSkill === index ? 1 : 0.5,
							scale: hoveredSkill === index ? 1.1 : 1,
						}}
						layout
						transition={{
							opacity: { duration: 0.3 },
							layout: { duration: 0.3, ease: 'easeInOut' },
							scale: { duration: 0.3, ease: 'easeOut' },
						}}
						style={{
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Reveal>{skill.animation}</Reveal>
						{hoveredSkill === index && (
							<motion.div
								className='skill-info'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								<h3>{skill.name}</h3>
								<p>{skill.description}</p>
							</motion.div>
						)}
					</motion.div>
				))}
			</div>
		</div>
	);
};
