import { Link } from "react-router-dom"
import "./Header.css"
export default function Header() {
    return (
        <div className="header">
            <Link to="/Drinks">
                <p>Drinks</p>
            </Link>
            <span>|</span>
            <Link to="/Desserts">
                <p>Desserts</p>
            </Link>
            <span>|</span>
            <Link to="/Others">
                <p>Others</p>
            </Link>
        </div>
    )
}