import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';
import Reveal from '../Reveal/Reveal';

const Contact = () => {
	const [formData, setFormData] = useState({
		Name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				'service_fm6qxl6',
				'template_t0she8l',
				formData,
				'QFScXBCwiLniRnXH_'
			)
			.then(
				(result) => {
					console.log(result.text);
					alert('Message Sent Successfully!');
				},
				(error) => {
					console.log(error.text);
					alert('An error occurred, please try again.');
				}
			);

		setFormData({
			Name: '',
			email: '',
			message: '',
		});
	};

	return (
		<motion.div className='contact-wrapper'>
			<Reveal></Reveal>
			<div className='contact-holder'>
				<motion className='contact-message'>
					<Reveal>
						<h1>Need work done?</h1>
					</Reveal>
					<Reveal>
						<p>
							Feel free to get in touch with me using the form. Whether you have
							questions, feedback, or opportunities, I'm here to help. Simply
							fill out your name, email, and message, and I'll get back to you
							as soon as possible. Your message will be sent directly to my
							inbox, ensuring a prompt response. I look forward to connecting
							with you!
						</p>
					</Reveal>
				</motion>
				<form
					className='contact-form'
					onSubmit={handleSubmit}
				>
					<div className='form-group'>
						<label htmlFor='Name'>Name</label>
						<input
							type='text'
							id='Name'
							name='Name'
							value={formData.Name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<button type='submit'>Send Message</button>
				</form>
			</div>
		</motion.div>
	);
};

export default Contact;
