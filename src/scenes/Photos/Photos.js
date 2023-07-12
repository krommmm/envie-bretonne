import { useEffect } from 'react';
import crepeChantilly from '../../assets/crepes/chocolat-chantilly/500.png';
import crepe from "../../assets/crepes/crepe-sucree-au-chocolat-et-chantille.jpg"

const Photos = () => {
	useEffect(() => {
		document.title = 'Galerie photos de nos prestations';
	}, []);
	return (
		<>
			<div className="Photos">
				<div className="photos_container">
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepe}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
					<div className="photo">
						<img
							className="imgCrepe"
							src={crepeChantilly}
							alt="img de crepe random"
						/>

						<div className="legend">
							<p>crèpe chocolat chantilly</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Photos;
