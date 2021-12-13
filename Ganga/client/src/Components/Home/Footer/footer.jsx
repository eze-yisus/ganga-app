import React from "react";
import j from "./footer.module.css";
import Newsletter from "../Newsletter/newsletter";

export default function FooterPage() {
  return (
    <div className={j.body}>
      <div fluid="true" className="text-center text-md-left">
        <div>
          <div>
            <h5 className={j.titulo}>GanGa</h5>
            <h5 className={j.eslogan}>Somos </h5>
          </div>
          <div>
            <div className={j.texTuEres}>
              <h3>GANGA nace con la intensión de incorporar productos asequibles
              a todo tipo de publico, dentro de sus capacidades, siempre hay un producto para cada día
              de buena calidad y al mejor precio. Y tú que esperas? Ven por tu GanGa.</h3>
            </div>
          </div>
          <div>
          <Newsletter/>
          </div>
          <div>
            <ul>
              <h1 className={j.ubicacion}>Estamos ubicados</h1>
            </ul>
            <div className={j.textUbicacion}>
              <h3>En toda Colombia</h3>
              <h3>Próximamente en Argentina</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={j.copyright}>
        <div fluid="true">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://ganga-app.vercel.app/catalogo">
            {" "}
            GanGa{" "}
          </a>
        </div>
      </div>
    </div>
  );
}