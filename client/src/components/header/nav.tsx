import { NavLink } from "react-router-dom";

const Nav = () => <nav className="nav">
        <button className="button button__dept">FAKELANDIA JUSTICE DEPARTMENT</button>
        <button className="button">
            <NavLink to='/'>Home</NavLink>
        </button>
        <button className="button">
            <NavLink to='/misdemeanour'>Misdemeanours</NavLink>
        </button>
        <button className="button">
            <NavLink to='/confession'>Confession To Us</NavLink>
        </button>
</nav>;

export default Nav;