import {Link} from "react-router-dom";


function Navbar() {
    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <div className="mx-1">
                        <img src="/logo.png" alt="logo" width="32" height="32"/>
                    </div>
                    <Link to={'/'} className="navbar-brand text-decoration-none">FilmScout</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">

                            <li className="nav-item dropdown">
                                <Link to='/' className="nav-link dropdown-toggle text-decoration-none"
                                      data-bs-toggle="dropdown" aria-expanded="false">Filme</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item text-decoration-none">Beliebt</Link></li>
                                    <li><Link to='/' className="dropdown-item text-decoration-none">Im Kino</Link></li>
                                    <li><Link to='/movies/upcoming' className="dropdown-item text-decoration-none">Demnächst</Link></li>
                                    <li><Link to='/' className="dropdown-item text-decoration-none">Bestbewertet</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to='/' className="nav-link dropdown-toggle text-decoration-none"
                                      data-bs-toggle="dropdown" aria-expanded="false">Serien</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item text-decoration-none">Beliebt</Link></li>
                                    <li><Link to='/' className="dropdown-item text-decoration-none">Heute im TV</Link></li>
                                    <li><Link to='/tv-series/on-the-air' className="dropdown-item text-decoration-none">Im TV</Link></li>
                                    <li><Link to='/' className="dropdown-item text-decoration-none">Bestbewertet</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to='/' className="nav-link dropdown-toggle text-decoration-none"
                                      data-bs-toggle="dropdown" aria-expanded="false">Personen</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item text-decoration-none">Beliebt</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;