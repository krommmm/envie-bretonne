import crepier from '../../assets/crepier.jpg';
import blinis from '../../assets/blinis.jpg';
import carteMini from '../../assets/carte-mini.png';
import carte from '../../assets/carte.png';
import cocktail from '../../assets/cocktail.jpg';
import { NavLink } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

const Accueil = () => {
	const myElementRef = useRef(null);
	const myUnderElementRef = useRef(null);
	const mySecElementRef = useRef(null);
	const mySecUnderElementRef = useRef(null);

	useEffect(() => {
		document.title = 'Votre traiteur crépier Breton à domicile';
	}, []);

	const handleClick = () => {
		myElementRef.current.style.visibility = 'visible';
		myUnderElementRef.current.style.transform = 'translateY(0px)';
	};
	const handleClick2 = () => {
		mySecElementRef.current.style.visibility = 'visible';
		mySecUnderElementRef.current.style.transform = 'translateY(0px)';
	};
	const handleClose2 = async () => {
		mySecUnderElementRef.current.style.transform = 'translateY(-1000px)';
		await wait1Second();
		mySecElementRef.current.style.visibility = 'hidden';
	};

	const wait1Second = async () => {
		await new Promise((resolve) => setTimeout(resolve, 600));
	};

	const handleClose = async () => {
		myUnderElementRef.current.style.transform = 'translateY(-1000px)';
		await wait1Second();
		myElementRef.current.style.visibility = 'hidden';
	};

	return (
		<>
			<div className="Accueil">
				<div className="left">
					<h2 className="title">
						Envie-Bretonne, votre crépier-traiteur à domicile
					</h2>
					<p>
						A l'occasion d'un <span className="bold">mariage</span>,{' '}
						<span className="bold">retour de noces</span>,{' '}
						<span className="bold">repas familial</span> ou{' '}
						<span className="bold">repas d'entreprise</span>,{' '}
						<span className="bold">départ en retraite</span>,
						"garden party", anniversaire, congrès, inauguration
						etc... Nous mettons à votre disposition notre savoir
						faire afin de satisfaire toutes vos envies gourmandes.
					</p>
					<img className="imageCrepe" src={crepier} alt="crepier" />
					<p>
						N'hésitez pas à nous contacter via le formulaire de
						<NavLink to="/Devis" className="blue bold">
							&nbsp;demande de devis
						</NavLink>
						, nous vous répondrons dans les plus brefs délais.
					</p>
					<div
						onClick={handleClick}
						className="btn-inverse btn btn-black"
					>
						<i className="fa-solid fa-pencil green" />
						&nbsp;&nbsp;Voir détails
					</div>

					<div ref={myElementRef} className="modal">
						<div ref={myUnderElementRef} className="modal-content">
							<span className="close" onClick={handleClose}>
								&times;
							</span>
							<h2>Titre en attente ...</h2>
							<div class="textContainer">
								<img
									className="cocktail_details"
									src={cocktail}
									alt="cocktail"
								/>
							</div>
							<div class="bouton_container">
								<div
									className="btn-inverse btn btn-black"
									onClick={handleClose}
								>
									Fermer
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="middle">
					<h2 className="title">
						Un choix important de Galettes et Crêpes Bretonnes
					</h2>
					<p>
						Pour vos événements et manifestations privés et
						professionnels nous vous proposons un choix important de
						crêpes et galettes bretonnes selon la prestation
						choisie,ce concept original et convivial étonnera vos
						convives,la crêperie à domicile une solution clé en
						mains.
					</p>
					<h2>Cocktail apéritif breton</h2>
					<ul>
						<li>Cocktail dinatoir</li>
						<li>Buffet froid</li>
						<li>Buffet chaud</li>
						<li>Repas complet</li>
						<li>Buffet et cuisine créole</li>
					</ul>
					<img src={blinis} alt="cocktail blinis" />
					<h2>Galettes blé noir sarrasin</h2>
					<ul>
						<li>Crêpes de froment</li>
						<li>Minis galettes de blé noir garnies </li>
						<li>chaudes</li>
						<li>Tronçons de galettes roulés chauds</li>
						<li>Tronçons de galettes roulés froids</li>
						<li>Blinis bretons garnis</li>
						<li>Des minis crêpes sucrées</li>
					</ul>
					<p className="bigger">
						N'hésitez pas à nous contacter via le formulaire de
						demande de devis, nous vous répondrons dans les plus
						brefs délais.
					</p>
					<NavLink to="/Formules" className="blue bold">
						<div className="btn-inverse btn btn-red">
							Voir détails »
						</div>
					</NavLink>
				</div>
				<div className="bottom">
					<h2 className="title">
						Nous nous déplaçons de Lorient à Paris
					</h2>
					<img
						className="carteMini"
						src={carteMini}
						alt="mini-carte de la france"
					/>

					<p>
						Pour tout évènement que vous souhaitez fêter avec vos
						amis, votre famille, vos collègues de travail, nous nous
						déplaçons sur le lieu de votre choix sur les régions
						suivantes :
					</p>
					<ul>
						<li className="green">Bretagne </li>
						<li className="brown">Pays de Loire </li>
						<li className="black">Basse Normandie</li>
						<li className="red">Poitou Charente</li>
						<li className="blue">Région parisienne</li>
					</ul>
					<div
						onClick={handleClick2}
						className="btn-inverse btn btn-yellow"
					>
						<i className="fa-solid fa-pencil" />
						&nbsp;&nbsp;Voir la liste des départements
					</div>
					<div ref={mySecElementRef} className="modal">
						<div
							ref={mySecUnderElementRef}
							className="modal-content"
						>
							<span className="close" onClick={handleClose2}>
								&times;
							</span>
							<h2>
								Zones de couverture ou Envie-Bretonne réalise
								devant vous et vos invités, crêpes et galettes
								bretonnes
							</h2>
							<div class="textContainer2">
								<img
									className="carteMiniPopUp"
									src={carte}
									alt="carte"
								/>
								<div className="Liste_carte_container">
									<p className="titleList">
										Liste des départements desservis:
									</p>
									<div class="list_carte">
										<ul>
											<li>Finistère (29)</li>
											<li>Ile et Vilaine (35)</li>
											<li>Vendée (85)</li>
											<li>Maine et Loire (49)</li>
											<li>Vienne (86)</li>
											<li>Sarthe (72)</li>
											<li>Calvados (14)</li>
											<li>Eure et Loire (28)</li>
											<li>Seine Maritime (76)</li>
											<li>Seine et Marne (77)</li>
											<li>Haut de Seine (92)</li>
											<li>Yvelines (78)</li>
											<li>Val de Marne (94)</li>
										</ul>
										<ul>
											<li>Morbihan (56)</li>
											<li>Côtes d'armor (22)</li>
											<li>Loire Atlantique (44)</li>
											<li>Deux sèvres (79)</li>
											<li>Mayenne (53)</li>
											<li>Manche (50)</li>
											<li>Orne (61)</li>
											<li>Eure (27)</li>
											<li>Oise (60)</li>
											<li>Val d'Oise (95)</li>
											<li>Seine St Denis (93)</li>
											<li>Essonne (91)</li>
											<li>Paris (75)</li>
										</ul>
									</div>
								</div>
							</div>
							<p className="indication">
								Nous nous déplaçons gratuitement pour toute
								prestation n'exédant pas 50km aller-retour,
								départ de Lorient. Au delà, nous facturons 85cts
								du km supplémentaire, plus frais de péage, si il
								y a lieu.
							</p>
							<div class="bouton_container">
								<div
									className="btn-inverse btn btn-black"
									onClick={handleClose2}
								>
									Fermer
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Accueil;
