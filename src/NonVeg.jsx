import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function NonVeg(){
    
             const dispatch  =useDispatch()
    const nonvegProducts =useSelector(state=>state.products.nonveg)
               const items= nonvegProducts.map((product,index)=>
                    <li key={index}>
                        {product.name}-${product.price}
                        <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
                    </li>

                   )
    

    return(
     <>
     
     <p>Nonveg Items</p>
     <ul>{items}</ul>
     </>
    )
}
export default NonVeg;