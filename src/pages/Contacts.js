import { Link } from "react-router-dom";

function Contacts() {
    return(
        <div className="contacts-style">
            <p className="contacts-caption">
                HI
            </p>

            <Link to="/" className="backhome-btn">
                Home
            </Link>
        </div>
    );
}

export default Contacts;