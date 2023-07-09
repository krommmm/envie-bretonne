import './styles/index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Accueil from "./scenes/Accueil/Accueil";
import Formules from "./scenes/Formules/Formules";
import Cocktails from "./scenes/Cocktails/Cocktails";
import Devis from "./scenes/Devis/Devis";
import Contact from "./scenes/Contact/Contact";
import Photos from "./scenes/Photos/Photos";

function App() {
	return (
		<>
			<Header />
      <Routes>
      <Route path="/" element={<Accueil/>}/>
      <Route path="/Formules" element={<Formules/>}/>
      <Route path="/Cocktails" element={<Cocktails/>}/>
      <Route path="/Devis" element={<Devis/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Photos" element={<Photos/>}/>
      </Routes>
			<Footer />
		</>
	);
}

export default App;
