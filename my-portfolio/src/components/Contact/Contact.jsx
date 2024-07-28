import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
	const [formData, setFormData] = useState({
		Name: '',
	});

	return (
		<motion.div className='contact-wrapper'>
			<h1>Contact Me</h1>
			<p>This is the contact section.</p>
		</motion.div>
	);
};

export default Contact;
