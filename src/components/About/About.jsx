import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../Reveal/Reveal';
import './About.css';

const About = () => {
	return (
		<div className='about-me-wrapper'>
			<div className='about-content-holder'>
				<div className='about-img-div'>
					<img
						src='images/prof.jpg'
						alt=''
					/>
				</div>
				<div className='about-words-wrapper'>
					<div className='my-story'>
						<Reveal>
							<h1>My Story</h1>
						</Reveal>
					</div>
					<div className='about-me div1'>
						<Reveal>
							<p>
								Hello! I'm Hayden Galyean, a passionate Software Engineer with a
								knack for creating engaging and dynamic user experiences. With a
								background in Full Stack Software Engineer, I have honed my
								skills in both front-end and back-end development.
							</p>
						</Reveal>
					</div>
					<div className='about-me div2'>
						<Reveal>
							<p>
								My journey into web development began when I purchased my first
								Udemy course in 2019. Since then, I've been dedicated to
								learning and evolving my skill set. I'm proficient in
								technologies such as React, HTML, CSS, JavaScript, Python, SQL,
								and I enjoy working on projects that challenge me to think
								creatively and solve complex problems.
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
