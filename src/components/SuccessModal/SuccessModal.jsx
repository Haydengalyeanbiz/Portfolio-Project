import { motion } from 'framer-motion';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, onClose }) => {
	return (
		isOpen && (
			<motion.div
				className='modal-backdrop'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<motion.div
					className='modal-content'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
				>
					<h2>Email Sent Successfully!</h2>
					<p>Thank you for reaching out. I will get back to you soon.</p>
					<button onClick={onClose}>Close</button>
				</motion.div>
			</motion.div>
		)
	);
};

export default SuccessModal;
