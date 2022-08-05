import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (<header className="nav">
        <NavLink to="/">Fetch & Display</NavLink>
        <NavLink to="/breaking">Breaking React</NavLink>
    </header>)
}