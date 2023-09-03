import { Link } from "react-router-dom";
import { BsBasket2Fill } from "react-icons/bs";
import "./Navbar.css"
export default function Navbar(props) {
    const { calculateTotalQuantity, cart } = props
    return (
        <div className="navbar">
            <Link to="/">
                <h2 className="logo">BrewScape.</h2>
            </Link>
            <div className="cart-product">
                <span className="cart-icon"><Link to="/Cart"><BsBasket2Fill color="white"/></Link></span>
                <span className="badge">{calculateTotalQuantity(cart)}</span>
            </div>
        </div>
    )
}
