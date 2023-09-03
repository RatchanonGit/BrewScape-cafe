import CartItem from "./CartItem"
import "./Cart.css"

const Cart = (props) => {

    const { cart, removecart,calculateTotalPrice,toggleQuantity } = props
    if ((cart.length) === 0) {
        return (
            <div className="shopping-cart">
                <div className="empty"> ไม่มีสินค้าในตะกร้า</div>
            </div>
        )
    } else {
        return (
            <div className="shopping-cart">
                <div className="title-cart"> สินค้าในตะกร้า</div>
                <div className="item-cart">
                    {cart.map((data) => {
                        return <CartItem key={data.id} {...data} removecart={removecart}  toggleQuantity={toggleQuantity}/>
                    })}
                </div>
                <div className="footer">ยอดรวม : {calculateTotalPrice(cart)}</div>
            </div>
        )
    }



}



export default Cart