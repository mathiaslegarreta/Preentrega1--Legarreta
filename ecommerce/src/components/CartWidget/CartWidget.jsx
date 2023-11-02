import cart from "./assets/cart.png"
import "./assets/CartWidget.modules.css"
const CartWidget = () =>{
    
    return(
        <div className="cart-container">
            <img className="cart" src={cart} alt="cart-widget" />
            <p>1</p>
        </div>
    )
}
export default CartWidget