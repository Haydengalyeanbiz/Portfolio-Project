import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import { Skills } from './components/Skills/Skills.jsx';
import { SocialsItem } from './components/SocialsItem/SocialsItem.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { GiHamburgerMenu } from 'react-icons/gi';

function App() {
	const [selected, setSelected] = useState('home');

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.6,
		};

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setSelected(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);

		const sectionElements = document.querySelectorAll('section');
		sectionElements.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sectionElements.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	const handleSetSelected = (section) => {
		setSelected(section);
		const navbarHeight = document.querySelector('.navbar-wrapper').offsetHeight;
		const element = document.getElementById(section);
		const offset =
			element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

		window.scrollTo({
			top: offset,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div className='app-body-wrapper'>
				<nav className='navbar-wrapper'>
					<div className='navbar-holder'>
						<button>
							<GiHamburgerMenu />
						</button>
						<motion.ul className='navbar-ul'>
							<motion.li onClick={() => handleSetSelected('home')}>
								<motion.a
									id='nav-a'
									className={selected === 'home' ? 'selected' : ''}
								>
									Home
								</motion.a>
							</motion.li>
							<motion.li onClick={() => handleSetSelected('skills')}>
								<motion.a
									id='nav-a'
									className={selected === 'skills' ? 'selected' : ''}
								>
									Skills
								</motion.a>
							</motion.li>
							<motion.li onClick={() => handleSetSelected('projects')}>
								<motion.a
									id='nav-a'
									className={selected === 'projects' ? 'selected' : ''}
								>
									Projects
								</motion.a>
							</motion.li>
							<motion.li onClick={() => handleSetSelected('about')}>
								<motion.a
									id='nav-a'
									className={selected === 'about' ? 'selected' : ''}
								>
									About
								</motion.a>
							</motion.li>
							<motion.li onClick={() => handleSetSelected('contact')}>
								<motion.a
									id='nav-a'
									className={selected === 'contact' ? 'selected' : ''}
								>
									Contact
								</motion.a>
							</motion.li>
						</motion.ul>
						<SocialsItem />
					</div>
				</nav>
				<motion.div className='app-components-wrapper'>
					<section id='home'>
						<Home handleSetSelected={handleSetSelected} />
					</section>
					<section id='skills'>
						<Skills />
					</section>
					<section id='projects'>
						<Projects />
					</section>
					<section id='about'>
						<About />
					</section>
					<section id='contact'>
						<Contact />
					</section>
					<footer>
						<Footer />
					</footer>
				</motion.div>
			</div>
		</>
	);
}

export default App;
