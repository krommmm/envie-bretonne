import { useEffect } from 'react';

const Photos = () => {
	useEffect(() => {
		document.title = 'Galerie photos de nos prestations';
	}, []);
	return (
		<>
			<div className="Photos">Photos ?</div>
		</>
	);
};
export default Photos;
