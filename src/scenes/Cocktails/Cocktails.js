import cocktails1 from '../../assets/250.png';
import cocktails2 from '../../assets/251.png';
import cocktails3 from '../../assets/252.png';
import { useEffect } from 'react';

const Cocktails = () => {
	useEffect(() => {
		document.title =
			'Cocktails Bretons, Cocktails Rustique et Cocktails Créoles';
	}, []);
 
	return (
		<>
			<div className="Cocktails">
				{/* Cocktails Breton */}
				<h2 className="first">Cocktails Breton</h2>
				<div className="buffet">
					<div className="buffet_text">
						<img
							className="cocktail1"
							src={cocktails1}
							alt="cocktails 1"
						/>
						<p>
							Le cocktail breton est composé de blinis salés et
							sucrés. Blinis salés de la mer et de la terre avec
							dégustation de roulés au fromage grillés sur bilig
							devant vos convives.
						</p>
						<p>
							Blinis sucré à la crème patissière aux fruits de
							saisons avec dégustation de blinis sucrés réalisés
							devant vos invités et garnis au sucre et caramel au
							beurre salé.
						</p>
						<p className="bigger">
							Ce cocktail est accompagné d'une boisson à base de
							cidre et de crème de cassis. Appelé KIR Breton.
						</p>
					</div>
				</div>
				{/* Cocktail Rustique */}
				<h2>Cocktail Rustique</h2>
				<div className="buffet">
					<img
						className="cocktail2"
						src={cocktails2}
						alt="cocktails 2"
					/>
					<p>
						Toast de charcuterie; terrine de campagne et mousse de
						canard. Verrines: Concombre fromage blanc et avocat
						crevettes.
					</p>
					<p>Minis Cakes lardons olives et fromage frais, chorizo.</p>
					<p>Tartelette pommes caramélisées.</p>
					<p className="bigger">
						Ce buffet sera accompagné de différent vins, rouge, rosé
						et kir.
					</p>
				</div>
				{/* Cocktail Créole */}
				<h2>Cocktail Créole</h2>
				<div className="buffet">
					<img
						className="cocktail3"
						src={cocktails3}
						alt="cocktails 3"
					/>
					<p>
						Samoussa au boeuf, Samoussa jambon fromage, bouchées de
						crevettes et de porc, piques de rondelles de saucisses
						cuisinées en rougail, brochettes de poulet épicées
						grillées devant vos convives puis coupe de fruits
						exotiques et fruits séchés.
					</p>
					<p className="bigger">
						Ce buffet est accompagné d'un punch Ananas coco et
						quatre épices préparé par nos soins.
					</p>
				</div>
			</div>
		</>
	);
};
export default Cocktails;
