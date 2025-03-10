import { useContext } from "react";
import ProductContext from "../context/ProductProvider";
import { UseProductContextType } from "../context/ProductProvider";


const UseProduct = (): UseProductContextType => {
    return useContext(ProductContext);
}

export default UseProduct;
