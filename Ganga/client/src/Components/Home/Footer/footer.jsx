import React from "react";
import j from "./footer.module.css";
import Newsletter from "../NewsLetter/newsletter";

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
            {/* <ul>
              <h1 className={j.vender}>Puedes vender tus productos</h1>
            </ul>
            <div className={j.textVender}>
              <h3>De una forma sencilla puedes convertirte en vendedor</h3>
              <h3>en una plataforma que te garantiza un buen soporte</h3>
              <h3>además de que tendrás asesoria en caso de requerirla.</h3>
            </div> */}
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
          <a href="https://ganga-app-78mh2uop7-eze-yisus.vercel.app/catalogo">
            {" "}
            GanGa{" "}
          </a>
        </div>
      </div>
    </div>
  );
}