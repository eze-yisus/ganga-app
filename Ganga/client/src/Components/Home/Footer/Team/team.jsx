import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import imgCarlos from "../../../Resources/imgCarlos.png";
import imgEzequiel from "../../../Resources/imgEzequiel.png";
import imgIgnacio from "../../../Resources/imgIgnacio.png";
import imgJairo from "../../../Resources/imgJairo.png";
import imgJeronimo from "../../../Resources/imgJeronimo.png";
import imgRenso from "../../../Resources/imgRenso.png";
import imgSebastian from "../../../Resources/imgSebastian.png";
import "./team.css";

export default function Team() {
  return (
    <div className="containerTeam">
      <div className="bannerTeam"></div>
      <div className="containerDevs">
        <div className="containerTeam1">
        <div className="conCarlos">
          <a href="https://www.linkedin.com/in/carlos-medina-code/"
           style={{ color: "white" }}
           target="_blank" 
           rel="noopener noreferrer"
          >
          <img className="imgCa" src={imgCarlos} alt="" />
          <div className="containerNomCa">
            <strong className="nomCa">CARLOS MEDINA</strong>
            <p className="roleCa">Front-end Developer</p>
          </div>
          <p className="contacCa">Contacto:</p>
          <div className="iconCa">
            <FaLinkedinIn />
          </div>
          </a>
        </div>
        <div className="conEzequiel">
          <a href="https://www.linkedin.com/in/ezequiel-camargo-dev/"
           style={{ color: "white" }}
           target="_blank" 
           rel="noopener noreferrer"
          >
          <img className="imgEz" src={imgEzequiel} alt="" />
          <div className="containerNomEz">
            <strong className="nomEz">EZEQUIEL CAMARGO</strong>
            <p className="roleEz">Back-end Developer</p>
          </div>
          <p className="contacEz">Contacto:</p>
          <div className="iconEz">
            <FaLinkedinIn />
          </div>
          </a>
        </div>
        <div className="conIgnacio">
          <a href="http://www.linkedin.com/in/ignaestiga"
           style={{ color: "white" }}
           target="_blank" 
           rel="noopener noreferrer"
          >
          <img className="imgIg" src={imgIgnacio} alt="" />
          <div className="containerNomIg">
            <strong className="nomIg">IGNACIO ESTIGARRIBIA</strong>
            <p className="roleIg">Front-end Developer</p>
          </div>
          <p className="contacIg">Contacto:</p>
          <div className="iconIg">
            <FaLinkedinIn />
          </div>
          </a>
        </div>
        <div className="conJairo">
          <a href="https://www.linkedin.com/in/jairocolondeveloper/"
           style={{ color: "white" }}
           target="_blank" 
           rel="noopener noreferrer"
          >        
          <img className="imgJa" src={imgJairo} alt="" />
          <div className="containerNomJa">
            <strong className="nomJa">JAIRO COLÓN</strong>
            <p className="roleJa">Front-end Developer</p>
          </div>
          <p className="contacJa">Contacto:</p>
          <div className="iconJa">
            <FaLinkedinIn />
          </div>
          </a>
        </div>
        </div>
        <div className="containerTeam2">
        <div className="conJeronimo">
          <a href="https://www.linkedin.com/in/jero-caride-dev/"
           style={{ color: "white" }}
           target="_blank" 
           rel="noopener noreferrer"
          >
          <img className="imgJe" src={imgJeronimo} alt="" />
          <div className="containerNomJe">
            <strong className="nomJe">JERONIMO CARIBE</strong>
            <p className="roleJe">Front-end Developer</p>
          </div>
          <p className="contacJe">Contacto:</p>
          <div className="iconJe">
            <FaLinkedinIn />
          </div>
          </a>
        </div>
        <div className="conRenso">
          <a href="https://www.linkedin.com/in/rensoolariaga/"
           style={{ color: "white" }}
           target="_blank" 
           rel="noopener noreferrer"
          >
          <img className="imgRe" src={imgRenso} alt="" />
          <div className="containerNomRe">
            <strong className="nomRe">RENSO OLARIAGA</strong>
            <p className="roleRe">Back-end Developer</p>
          </div>
          <p className="contacRe">Contacto:</p>
          <div className="iconRe">
            <FaLinkedinIn />
          </div>
          </a>
        </div>
        <div className="conSebastian">
          <a href="https://www.linkedin.com/in/sebastian-trx/"
           style={{ color: "white" }}
           target="_blank" 
           rel="noopener noreferrer"
          >
          <img className="imgSe" src={imgSebastian} alt="" />
          <div className="containerNomSe">
            <strong className="nomSe">SEBASTIAN TORRES</strong>
            <p className="roleSe">Back-end Developer</p>
          </div>
          <p className="contacSe">Contacto:</p>
          <div className="iconSe">
            <FaLinkedinIn />
          </div>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
