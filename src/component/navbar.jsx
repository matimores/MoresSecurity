import { Link } from "react-router-dom";
import CardWidget from "./cardWidget";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="../../public/logo/logo.png" alt="" />
          </Link>
         
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
              
            </button>
           <CardWidget />
         

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="link" to="/category/camaras">
                  CAMARAS
                </Link>
              </li>
              <li class="nav-item">
                <Link class="link" to="/category/solar">
                  SOLAR
                </Link>
              </li>
              <li class="nav-item">
                <Link class="link" to="/category/kits">
                  KITS
                </Link>
              </li>
              <li class="nav-item">
                <Link class="link " to="/contacto">
                  <button className="shadow_btn">CONTACTO</button>
                </Link>
              </li>
            </ul>
          </div>
           
        </div>
      </nav>
    </>
  );
};
export default Navbar;
