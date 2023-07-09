import buffet1 from '../../assets/2001.png';
import buffet2 from '../../assets/200.png';
import buffet3 from '../../assets/202.png';
import buffet4 from '../../assets/204.png';
import buffet5 from '../../assets/205.png';
import buffet6 from '../../assets/206.png';
import { useEffect } from 'react';

const Formules = () => {
	useEffect(() => {
		document.title =
			'Nos différentes formules de galettes et crêpes bretonnes';
	}, []);
	return (
		<>
			<div className="Formules">
				<div className="formules_content">
					{/* Buffet Classique forestière ou Merguez */}
					<h2 className="first">
						Buffet Classique forestière ou Merguez
					</h2>
					<div className="buffet">
						<div className="buffet_text">
							<ul>
								<img
									className="buffet2"
									src={buffet2}
									alt="buffet 2"
								/>
								<li>2 Galettes Garnies:</li>
								<li>1 Complète (Jambon, oeuf, fromage).</li>
								<li>
									1 Galette forestière (lardons, champignons,
									oignons, crème)
								</li>
								<li>ou</li>
								<li>
									1 Galette Merguez (Merguez, sauce tomate,
									oignons, oeuf)
								</li>
							</ul>

							<p className="bigger">
								Tous les buffets sont suivis du buffet Dessert
								(Crèpe dessert à volonté)
							</p>
						</div>
					</div>
					{/* Buffet au choix */}
					<h2>Buffet aux choix</h2>
					<div className="buffet">
						<div className="buffet_text">
							<ul>
								<img
									className="buffet1"
									src={buffet1}
									alt="buffet 1"
								/>
								<li> 2 Galettes garnies:</li>
								<li>1 complète (jambon, oeuf, fromage)</li>
								<li>
									1 galette avec le choix des ingrédients ( 3
									ingrédients par galette)
								</li>
								<li>parmis les ingrédients:</li>
								<li>
									Oeuf, Jambon, Fromage, Andouille de guémené,
									Saumon fumé servi{' '}
								</li>
								<li>
									avec sa crème ciboulette citronnée, Merguez
									...
								</li>
							</ul>
							<p className="bigger">
								Tous les buffets sont suivis du buffet Dessert
								(crèpes dessert à volonté)
							</p>
						</div>
					</div>
					{/* Buffet aux choix à volonté*/}
					<h2 className="first">Buffet aux choix à volonté</h2>
					<div className="buffet">
						<div className="buffet_text">
							<p>
								{' '}
								<img
									className="buffet3"
									src={buffet3}
									alt="buffet 2"
								/>
								Galettes garnies choisies par vos invités en
								quantité souhaitée avec la liste des ingrédients
								ci dessous: (Oeuf, jambon, fromage, andouille de
								guémené, sauce moutarde, saumon fumé, crème
								ciboulette citronnée, merguez.)
								<p className="bigger">
									Tous les buffets sont suivis du buffet
									Dessert (crèpes dessert à volonté)
								</p>
							</p>
						</div>
					</div>
					{/* Buffet à la carte */}
					<h2>Buffet à la carte</h2>
					<div className="buffet">
						<div className="buffet_text">
							<p className="miniTitle">Première galette:</p>
							<p>
								<img
									className="buffet4"
									src={buffet4}
									alt="buffet 4"
								/>
								1 galette saumon: (Saumon fumé crème fraîche
								ciboulette citronnée)
								<p className="ou">ou</p>1 galette St Jacques:
								Noix de St Jacques à la crème accompagnée d'un
								fondu de poireaux
							</p>
						</div>
					</div>
					<div className="buffet">
						<div className="buffet_text">
							<p className="miniTitle">Deuxième galette:</p>
							<p>
								<img
									className="buffet5"
									src={buffet5}
									alt="buffet 5"
								/>
								Complète andouille aux pommes poëlées au beurre
								<p className="ou">ou</p>
								Galette forestière: Lardons, champignons,
								oignons, crème
							</p>
						</div>
					</div>
					{/* Buffet Dessert */}
					<h2 className="first">Buffet Dessert</h2>
					<div className="buffet">
						<div className="buffet_text">
							<p>Crêpes dessert à volonté garnies aux choix:</p>
							<p>
								<img
									className="buffet6"
									src={buffet6}
									alt="buffet 6"
								/>
								Chocolat maison, confiture, fraise, abricot,
								myrtille, sucre et caramel au beurre salé,
								pommes poëlées au beurre.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Formules;
