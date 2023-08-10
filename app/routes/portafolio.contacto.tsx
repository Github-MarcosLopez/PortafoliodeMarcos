import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/contactame.css";
import { Link } from "@remix-run/react";

import CV from "../../public/img/CurriculumVitae.jpg";
import Mac from "../../public/img/mac.png";
import Correo from "../../public/img/correo.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ContactoPortafolioRoute() {
  return (
    <main>
      <section>
        <div className="portafolio_contactame">
          <div className="contactame_container">
            <h1 className="encabezado">Desarrolador Junior</h1>
            <h2 className="encabezado">Marcos Lopez Sanchez</h2>
            <h4 className="encabezado">PORTAFOLIO CONTACTO</h4>
            <div className="contactame_content" style={{marginRight:"100px"}}>
              {/* car 1 */}
              <div className="card">
                <img style={{width:"100px",marginRight:"0", borderRadius:"10px"}} src={CV} alt="" />
              </div>
              {/* car 2 */}
              <div className="card">
                <img style={{width:"300px"}} src={Mac} alt="" />
              </div>
              {/* car 3 */}
              <div className="card">
                <img style={{width:"300px", marginTop:"70px"}} src={Correo} alt="" />
              </div>
            </div>
          </div>
          {/* Inicio del boton curriculum viate */}
          <Link
            className="button"
            to="https://drive.google.com/file/d/1I6Gz0FbIle17-6rES018pqQUAK4lWM3f/view?usp=drive_link"
            download="CV"
            reloadDocument
          >
            <button>
              <span></span>CV.pdf
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
