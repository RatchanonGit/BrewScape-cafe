import "./Cart.css"
import plus from '../../../image/plus.svg'
import minus from '../../../image/minus.svg'
import deleteicon from '../../../image/delete-icn.svg'

const CartItem = ({ removecart, toggleQuantity, id, name, price, image, quantity }) => {

    return (
        <div className="item">
            <div className="product-image">
                <img src={image} alt="" />
            </div>
            <div className="description">
                <span>{name}</span>
                <span>{price} baht</span>
            </div>
            <div className="quantity">
                <button className="plus-btn" onClick={() => toggleQuantity(id,"increment")}><img src={plus} alt="" /></button>
                <input type="text" value={quantity} disabled />
                <button className="minus-btn" onClick={() => toggleQuantity(id,"decrement")}> <img src={minus} alt="" /></button>
            </div>
            <div className="total-price">
                {quantity * price}
            </div>
            <div className="remove" onClick={() => removecart(id)}>
                <img src={deleteicon} alt="" />
            </div>
        </div>
    )
}

export default CartItem