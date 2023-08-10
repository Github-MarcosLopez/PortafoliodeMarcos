{
  /*Home*/
}
import { LinksFunction } from "@remix-run/node";
import perfile from "../../public/img/perfile.png";
import stylesUrl from "./styles/portaIndex.css";
import { FaReact, FaJava, FaFileCode, FaMdb } from "react-icons/fa6";

import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function PortafolioIndexRoute() {
  return (
    <main>
      <div className="portafolio_acerca">
        <h1 style={{ textAlign: "center", color: "white" }}>
          Marcos Lopez Sanchez
        </h1>
        <h3 style={{ textAlign: "center", color: "white", marginTop: "10px" }}>
          Junior Developer
        </h3>
        <section id="portafolio_index">
          <div className="portafolio-section">
            <img className="perfile-img" src={perfile} alt="Marcos_Lopez" />
            <div className="about-content">
              <div className="about-container">
                <div className="card">
                  <div className="card-content">
                    <div className="card-conteiner">
                      <span></span>
                      <h3 className="portafolio-h3">Habilidades</h3>
                      <p>
                        <span style={{ fontSize: "20px" }}>
                          Experiencia en:
                        </span>
                        <br />
                        <br /> <FaReact style={{ fontSize: "30px" }} />
                        React <br />
                        <FaJava style={{ fontSize: "30px" }} />
                        java <br />
                        <FaFileCode style={{ fontSize: "30px" }} />
                        Spring Boot
                        <br />
                        <FaMdb style={{ fontSize: "30px" }} /> Mongo DB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-conteiner">
                      <span></span>
                      <h3 className="portafolio-h3">Disponibilidad</h3>
                      <p>
                        La experiencia obtenida es por el aprendizaje
                        autodidacta con ayuda de las tecnología de la
                        informacion. Cuento con toda la disponibilidad de
                        esfuerzo, dedicación y tiempo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-conteiner">
                      <span></span>
                      <h3 className="portafolio-h3">Compromiso</h3>
                      <p>
                        Enfrento situaciones poco comunes, bajo presión
                        desarrollando habilidades tanto responsabilidad para un
                        crecimiento propio, con una curva de aprendizaje en base
                        a mi experiencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              className="w-6 h-6 text-tiny"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="sm"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              size="md"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-20 h-20 text-large"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
