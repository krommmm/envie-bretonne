import { useState,useEffect } from 'react';


const Devis = () => {

	const [name, setName] = useState('');
	const [fname, setFname] = useState('');
	const [mail, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [nbPersons, setNbPersons] = useState('');
	const [ville, setVille] = useState('');
	const [msg, setMsg] = useState('');

	useEffect(() => {
		document.title =
			'Demande de devis en ligne';
	}, []);

	const handleClick = () => {
		var text = `prenom : ${name}\n
		nom : ${fname}\n
		email : ${mail}\n
		phone : ${phone}\n 
		nbPersons : ${nbPersons}\n
		ville : ${ville}\n
		\n
		msg: \n
		${msg}`;
		sendEmail(text);
	};

	const sendEmail = async (contenuMsg) => {
	console.log(contenuMsg);
	};

	return (
		<>
			<div className="Devis">
				<h1>Un anniversaire, un départ en retraite à fêter ?</h1>
				<h2>
					N'hésitez pas à nous contacter via ce formulaire en étant le
					plus précis possible dans votre demande.
				</h2>
				<div className="form_Devis">
					<fieldset>
						<legend>Demande de devis</legend>
						{/* nom */}
						<label htmlFor="Nom">
							<div className="title">
								<i className="fa-solid fa-user" />
								Nom :
							</div>
							<input
								type="text"
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</label>
						{/* prenom */}
						<label htmlFor="prenom">
							<div className="title">
								<i className="fa-solid fa-user" />
								Prénom :
							</div>
							<input
								type="text"
								onChange={(e) => {
									setFname(e.target.value);
								}}
							/>
						</label>
						{/* email */}
						<label htmlFor="email">
							<div className="title">
								<i className="fa-solid fa-envelope" />
								E-Mail :
							</div>
							<input
								type="email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</label>
						{/* phone */}
						<label htmlFor="phone">
							<div className="title">
								<i className="fa-solid fa-phone" />
								Téléphone :
							</div>
							<input
								type="text"
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
						</label>
						{/* NbPersonnes */}
						<label htmlFor="nbPersonnes">
							<div className="title">
								<i className="fa-solid fa-question" /> Nb
								personnes :
							</div>
							<input
								type="text"
								onChange={(e) => {
									setNbPersons(e.target.value);
								}}
							/>
						</label>
						{/* ville */}
						<label htmlFor="Ville">
							<div className="title">
								<i className="fa-solid fa-truck" />
								Ville de réception :
							</div>
							<input
								type="text"
								onChange={(e) => {
									setVille(e.target.value);
								}}
							/>
						</label>
						{/* msg */}
						<label htmlFor="msg">
							<div className="title">
								<i className="fa-solid fa-pencil" />
								Votre message :
							</div>
							<textarea
								id="comment"
								onChange={(e) => {
									setMsg(e.target.value);
								}}
							/>
						</label>
						{/* bouton */}
						<div
							className="btn-inverse btn btn-green"
							onClick={() => {
								handleClick();
							}}
						>
							Envoyer
							<i className="fa-solid fa-check" />
						</div>
					</fieldset>
				</div>
			</div>
		</>
	);
};
export default Devis;
