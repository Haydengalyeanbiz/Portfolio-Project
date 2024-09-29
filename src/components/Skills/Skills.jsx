import Reveal from '../Reveal/Reveal';
import { motion } from 'framer-motion';
import './Skills.css';

// Array of badge URLs
const badges = [
	{
		src: 'https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
		alt: 'React Badge',
	},
	{
		src: 'https://img.shields.io/badge/Redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white',
		alt: 'Redux Badge',
	},
	{
		src: 'https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black',
		alt: 'Javascript Badge',
	},
	{
		src: 'https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white',
		alt: 'Vite Badge',
	},
	{
		src: 'https://img.shields.io/badge/HTML-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
		alt: 'HTML Badge',
	},
	{
		src: 'https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
		alt: 'CSS Badge',
	},
	{
		src: 'https://img.shields.io/badge/Framer_Motion-%23000000.svg?style=for-the-badge&logo=framer&logoColor=white',
		alt: 'Framer-Motion Badge',
	},
	{
		src: 'https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white',
		alt: 'Flask Badge',
	},
	{
		src: 'https://img.shields.io/badge/Express-%23000000.svg?style=for-the-badge&logo=express&logoColor=white',
		alt: 'Express Badge',
	},
	{
		src: 'https://img.shields.io/badge/Sequelize-%2300c7b7.svg?style=for-the-badge&logo=sequelize&logoColor=white',
		alt: 'Sequelize Badge',
	},
	{
		src: 'https://img.shields.io/badge/Supabase-%233ECF8E.svg?style=for-the-badge&logo=supabase&logoColor=white',
		alt: 'Supabase Badge',
	},
];

export const Skills = () => {
	// Animation variants for seamless looping
	const carouselVariants = {
		animate: {
			x: ['0%', '-100%'], // Scroll from 0% to -100%
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 20, // Adjust the speed here
					ease: 'linear',
				},
			},
		},
	};

	return (
		<div className='skills-wrapper'>
			<Reveal>
				<h2>My Skills</h2>
			</Reveal>
			<div className='skills-carousel'>
				<motion.div
					className='skills-content'
					variants={carouselVariants}
					animate='animate'
				>
					{badges.map((badge, index) => (
						<img
							key={index}
							src={badge.src}
							alt={badge.alt}
						/>
					))}
					{/* Duplicate the badges for seamless looping */}
					{badges.map((badge, index) => (
						<img
							key={index + badges.length}
							src={badge.src}
							alt={badge.alt}
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
};
