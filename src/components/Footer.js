import triskel from '../assets/triskel.png';

const Footer = () => {
	let date = new Date().getFullYear();

	return (
		<>
			<footer>
				<img id="triskel_img" src={triskel} alt="logo envie-bretonne"></img>
				<p>© Envie-Bretonne.com 2013-{date}</p>
			</footer>
		</>
	);
};

export default Footer;
