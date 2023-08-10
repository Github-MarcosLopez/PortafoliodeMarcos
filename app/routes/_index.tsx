import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import stylesUrl from "./styles/local.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          <span>Marcos Lopez.</span>
        </h1>
        <nav className="content-hover">
          <ul>
            <li className="row hover">
              <Link to="portafolio">
                <button>
                  <span></span>Portafolio
                </button>
              </Link>
            </li>
            <li className="row hover">
              <Link
                to="https://drive.google.com/file/d/1I6Gz0FbIle17-6rES018pqQUAK4lWM3f/view?usp=drive_link"
                download="CV"
                reloadDocument
              >
                <button>
                  <span></span>CV.pdf
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
