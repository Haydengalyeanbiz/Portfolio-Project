import { SocialsItem } from '../SocialsItem/SocialsItem';
import './Footer.css';
import Reveal from '../Reveal/Reveal';

export const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='foot-hold'>
				<Reveal>
					<p>HaydenGalyean © 2024-2025</p>
				</Reveal>
				<Reveal>
					<SocialsItem />
				</Reveal>
			</div>
		</div>
	);
};
