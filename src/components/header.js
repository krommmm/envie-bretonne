import { NavLink } from 'react-router-dom';
import blé from '../assets/ble.png';
import crepe from "../assets/crepe.png";
import crepe2 from "../assets/crepe2.png";
import crepe3 from "../assets/crepe3.png";
import crepe4 from "../assets/crepe4.png";
import crepe5 from "../assets/crepe5.png";
import triksel from "../assets/triskel.png";
import {useEffect} from "react";



const Header = () => {


    useEffect(()=>{
        var diapo = document.querySelector('.diapo_img');
        var banner = document.querySelector('.banner_container');
    
        var crepesObject = [
            {image: crepe, titre : "Traiteur - Crépier"},
            {image:blé, titre: "Crêpes à domicile"},
            {image: crepe2, titre : "Crêpes Lorient"},
            {image: crepe3, titre : "Galettes Bretonnes"},
            {image: crepe4, titre : "Cocktails Blinis"},
            {image: crepe5, titre : "Repas pour toutes occasions"},
        ];

        
        const bannerGoDown = async () => {
            banner.style.transform = 'translateY(0px)';
            banner.style.opacity = '0.7';
            await wait2Seconds();
        };
        const bannerGoUp = async () => {
            banner.style.transform = 'translateY(-305px)';
            banner.style.opacity = '0';
            await wait1Seconds();
        };
        
        const wait2Seconds = async () => {
            await new Promise((resolve) => setTimeout(resolve, 4000));
        };
        
        const wait1Seconds = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        };
        
        const diapoGogo = async () => {
            banner.style.transform = 'translateY(-305px)';
            await wait1Seconds();
            for (let i = 0; i < crepesObject.length; i++) {
                diapo.style.opacity = '1';
                diapo.setAttribute('src', `${crepesObject[i].image}`);
                document.querySelector(".banner_container .titre").textContent = `${crepesObject[i].titre}`;
                await wait1Seconds();
                await bannerGoDown();
                await bannerGoUp();
                diapo.style.opacity = '0';
                await wait1Seconds();
            }
        };
        
        const repeatDiapoGogo = async () => {
            while (true) {
                await diapoGogo();
            }
        };
        
        repeatDiapoGogo();
        
    },[]);
    useEffect(()=>{
        const ancre = document.querySelector(".AncreDébutImg");
        window.addEventListener("scroll", () => {
          if (window.scrollY > 700) {
            ancre.style.opacity = "1";
            ancre.style.transform = "scale(1)";
          } else if (window.scrollY < 700) {
            ancre.style.transform = "scale(0)";
          }
        });
    },[]);



    return (
        <>
          <div id="Ancre"></div>
        <header>
            {/* Renseignements */}
            <div className="top">
                <p><span className="red">Envie Bretonne, votre traiteur crépier</span></p>
                <p>Conseils - Devis - Renseignements</p>
                <p>Appelez nous au <span className="red big">06 27 78 06 15</span></p>
            </div>
            {/* diapo + bannière */}
            <div className="middle">
            <div className="diapo_container">
			<div className="diapo">
				<img className="diapo_img" src={crepe} alt="crepe"/>
				<div className="banner_container">
					<p className="titre">Traiteur - Crépier</p>
					<img className="triskel" src={triksel} alt="croix bretonne"/>
				</div>
			</div>
		</div>
            </div>
          
            {/* Panneau de navigation */}
            <div className="bottom">
            <NavLink to="/" className={({ isActive }) => isActive ? 'activeLink red' : undefined }><i className="fa-solid fa-house red"><p className=" red coolText">Accueil</p></i></NavLink>
            <NavLink to="/Formules" className={({ isActive }) => isActive ? 'activeLink brown' : undefined }><i className="fa-solid fa-utensils brown"><p className="brown coolText">Formules</p></i></NavLink>
            <NavLink to="/Cocktails" className={({ isActive }) => isActive ? 'activeLink black' : undefined }><i className="fa-solid fa-martini-glass black"><p className="black coolText">Cocktails</p></i></NavLink>
            <NavLink to="/Devis" className={({ isActive }) => isActive ? 'activeLink green' : undefined }><i className="fa-solid fa-pencil green"><p className="green coolText">Devis</p></i></NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? 'activeLink brown' : undefined }><i className="fa-regular fa-envelope brown"><p className="brown coolText">Contact</p></i></NavLink>
            <NavLink to="/Photos" className={({ isActive }) => isActive ? 'activeLink blue' : undefined }><i className="fa-solid fa-camera blue"><p className="blue coolText">Photos</p></i></NavLink>
            </div>
        </header>
       
		<a class="AncreDébut" href="#Ancre">
            <div class="AncreDébutImg"><i class="fa-solid fa-up-long"></i>
            </div></a>
        </>
    );
};

export default Header;