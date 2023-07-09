import { useEffect } from 'react';
const Contact = () => {
	useEffect(() => {
		document.title =
			'Mentions légales de Envie Bretonne';
	}, []);
	return ( 
		<>
			<div className="Contact">
				<h2>Mentions légales de Envie Bretonne</h2>

				<div className="contact_container">
					<p>Contact : Mme Cathy Gattepaille</p>
					<p>Email : contact@envie-bretonne.com</p>
				</div>

				<div className="contact_container">
					<p>Envie Bretonne</p>
					<p>8, rue kennedy</p>
					<p>56100 Lorient Bretagne.</p>
					<p>
						Téléphone : 06 27 78 06 15. Site internet : Crépier à
						domicile.{' '}
					</p>
				</div>

				<div className="contact_container">
					<h2>Hébergement</h2>
					<p>Ce site est hébergé chez OVH</p>
					<p>2 rue Kellermann</p>
					<p>59100 Roubaix</p>
				</div>
			</div>
		</>
	);
};
export default Contact;
