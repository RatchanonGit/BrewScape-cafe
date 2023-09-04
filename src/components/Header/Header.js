import { Link } from "react-router-dom"
import "./Header.css"
export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <p>Home</p>
            </Link>

            <span>|</span>

            <Link to="/Drinks">
                <p>Drinks</p>
            </Link>

            <span>|</span>

            <Link to="/Desserts">
                <p>Desserts</p>
            </Link>
        </div>
    )
}