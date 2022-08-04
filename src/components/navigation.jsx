import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (<header className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/breaking">Breaking</NavLink>
    </header>)
}