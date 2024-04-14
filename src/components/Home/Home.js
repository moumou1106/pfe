import React from "react";
import "./home.css";
import upperHome from "../../assets/homeUpper.png"
import srv1 from "../../assets/serv1.png"
import srv2 from "../../assets/srv2.png"
import srv3 from "../../assets/srv3.png"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="navbar">
        <p className="service" onClick={()=>{
          window.scrollTo({
            top: 530,
            left: 530,
            behavior: "smooth",
          });
        }}>Services</p>
        <p className="connecter" onClick={()=>{
          navigate("/login")
        }}>Se Connecter</p>
      </div>
      <div className="upperHome">
        <div className="upperHomeContainer">
          <p className="upperHomeTitle">Digital E-service</p>
          <p className="upperHomeContent">
            L’Oni vise à améliorer l'efficacité et la collaboration entre les
            ministères et les organismes gouvernementaux en facilitant la
            recherche des données dans le cadre nationale d’intéropérabilité.
          </p>
        </div>
        <img src={upperHome} alt="" />
      </div>
      <div className="midHome">
        <p>Comment utiliser ?</p>
        <div className="midHomeContainer">
          <div className="midHomeCard">
            <img src={srv1} alt="" />
            <p>Rejoignez la platforme</p>
          </div>
          <div className="midHomeCard">
            <img src={srv2} alt="" />
            <p>Completer le formulaire</p>
          </div>
          <div className="midHomeCard">
            <img src={srv3} alt="" />
            <p>Obtenez votre service</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="upperFooter">
          <p>A PROPOS</p>
          <p>ETABLISSEMENT</p>
          <p>SERVICES</p>
          <p>CONTACTS</p>
        </div>
        <div className="lowerFooter">
          <div className="lowerFooter1">
            <div className="lowerFooterDetails">
              <p>CONTACT</p>
              <p>+216 12345678</p>
            </div>
            <div className="lowerFooterDetails">
              <p>EMAIL</p>
              <p>oumaima@gmail.com</p>
            </div>
            <div className="lowerFooterDetails">
              <p>ADDRESSE</p>
              <p>Tunis,Bizerte</p>
            </div>
          </div>
          <div className="lowerFooter2">
            <p>© 2024 -- Copyright</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
