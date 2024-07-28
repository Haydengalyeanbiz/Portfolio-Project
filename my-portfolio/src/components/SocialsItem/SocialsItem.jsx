import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './SocialsItem.css';

export const SocialsItem = () => {
	return (
		<motion.div className='socials-div'>
			<motion.ul className='socials-ul'>
				<motion.li>
					<Link
						to='https://github.com/Haydengalyeanbiz'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub />
					</Link>
				</motion.li>
				<motion.li>
					<Link
						to='https://www.linkedin.com/in/hayden-galyean-42a518189'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedin />
					</Link>
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};
