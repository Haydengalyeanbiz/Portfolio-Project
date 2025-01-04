import Reveal from '../Reveal/Reveal';
import { motion } from 'framer-motion';
import './Skills.css';

// Array of badge URLs
const badges = [
	{
		src: 'https://img.shields.io/badge/Amazon%20API-FF9900.svg?style=for-the-badge&logo=amazon&logoColor=white',
		alt: 'PAAPI5 badge',
	},
	{
		src: 'https://img.shields.io/badge/Vue.js-%2335495e.svg?style=for-the-badge&logo=vue.js&logoColor=%234FC08D',
		alt: 'Vue Badge',
	},
	{
		src: 'https://img.shields.io/badge/Vuex-%2335495e.svg?style=for-the-badge&logo=vue.js&logoColor=%234FC08D',
		alt: 'VueX Badge',
	},
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
	return (
		<div className='skills-wrapper'>
			<motion.div
				className='skills-content'
				transition={{ ease: 'linear' }}
			>
				{badges.map((badge, index) => (
					<Reveal>
						<img
							className='skill-item'
							key={index}
							src={badge.src}
							alt={badge.alt}
						/>
					</Reveal>
				))}
			</motion.div>
		</div>
	);
};
