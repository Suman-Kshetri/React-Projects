import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { UseCartContextType } from "../context/CartProvider";


const UseCart = (): UseCartContextType => {
    return useContext(CartContext);
}

export default UseCart;
