import { Link, NavLink } from "react-router-dom";
import "../styles/styling.css";


export default function SiteHeader() {

    return (
        <div className="inner-page site-header">
            <header className="banner">
                <Link to="/" className="CD site-logo" aria-label="Carden Dang home">CD</Link>
                <nav className="homepage-btns" aria-label="Main navigation">
                    <NavLink
                        to="/"
                        end
                        className="backhome-btn"
                    >
                        home
                    </NavLink>
                    <a
                        className="resume-btn"
                        href="https://drive.google.com/file/d/1YiVLqwxrqPLXyCWEL7XU_5X2phths53U/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        resume
                    </a>
                    {["experience", "projects", "skills", "contacts"].map(page => (
                        <NavLink
                            key={page}
                            to={`/${page}`}
                            className={`${page}-btn`}
                        >
                            {page}
                        </NavLink>
                    ))}
                </nav>
            </header>
        </div>
    );
}
