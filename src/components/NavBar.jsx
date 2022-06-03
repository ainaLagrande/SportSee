import logo from "../assets/logo.svg"
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return(<div className="navBar">
        <nav>
            <ul>
                <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="logo de SportSee"/>
                </NavLink>
                </div>
                <NavLink to="/"><li>Accueil</li></NavLink>
                <NavLink to="/Profil"><li>Profil</li></NavLink>
                <NavLink to="/Réglages"><li>Réglages</li></NavLink>
                <NavLink to="/Communauté"><li>Communauté</li></NavLink>
            </ul>
        </nav>
    </div>

    )
}