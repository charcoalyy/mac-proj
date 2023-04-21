import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <section className="navbar">
                <Link to="/" className="navlink">
                    <p>Dashboard</p>
                </Link>
            </section>
        </header>
    )
}

export default Navbar;