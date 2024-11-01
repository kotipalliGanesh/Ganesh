import { useDispatch, useSelector } from "react-redux";
import { decrement, increament, remove } from "./Store";
import { useState } from "react";


function Cart(){
         
    const cartItems  = useSelector((state)=>state.cart)
                   const dispatch = useDispatch()
              const   listItems= cartItems.map((item,index)=>
                       <li key={index}>
                        Name:{item.name}-Price$:{item.price}
                        <button onClick={()=>dispatch(increament(item))}>+1</button>
                        <button  onClick={()=>dispatch(decrement(item))} >-1</button>
                        -Quantity:{item.quantity}
                        <button onClick={()=>dispatch(remove(item))}>Delete The Item</button>
                       </li>
                   )
            const [dpamount,setdpamount]=useState(0);
            const applyDiscount=(dvalue)=>{
                                    setdpamount(dvalue);
                                }  





                                
            const[couponCode,setCouponCode]=useState('');
            const[couponDiscountPercentage,setCouponDiscountPercentage]=useState(0);
            
          const handleApplyCoupon=()=>{


               switch(couponCode)
               {
                case 'Diwali10':
                    setCouponDiscountPercentage(10);
                    break;
                case 'Diwali20':
                    setCouponDiscountPercentage(20);
                    break;
                default:
                    alert('Invalid couponCode');
                    setCouponDiscountPercentage(0);

               }
          }










            const calculateTotal=()=>{
            const total=cartItems.reduce((sum,item)=> sum+item.price*item.quantity,0);
            const ftotal=parseFloat(total.toFixed(2))

            const discountAmount=total*(dpamount/100)
            const fdiscountAmount=parseFloat(discountAmount.toFixed(2))




                // let discountAmount=0;
                // if(dpamount===10)
                //     {
                //          discountAmount=total*0.1;
                //     }
                //     else if(dpamount===20)
                //     {
                //         discountAmount=total*0.2;
                //     }
                //     else if(dpamount===30)
                //     {
                //         discountAmount=total*0.3;
                //     }
                //     else
                //     {
                //         discountAmount=0;
                //     }
            

                const couponDiscountAmount=total*(couponDiscountPercentage/100);
                const fcouponDiscountAmount=parseFloat(couponDiscountAmount.toFixed(2))



            const finalAmount=total-discountAmount-couponDiscountAmount;
            const ffinalAmount=parseFloat(finalAmount.toFixed(2))
                   return{ 
                   
                    //   total:parseFloat(total.toFixed(2)),
                    //   discountAmount:parseFloat(discountAmount.toFixed(2)),
                    //   finalAmount:parseFloat(finalAmount.toFixed(2))
                     ftotal,fdiscountAmount,ffinalAmount,fcouponDiscountAmount


                    }
                   
              }
        
        // const {total,discountAmount,finalAmount}=calculateTotal();
           const {ftotal,fdiscountAmount,ffinalAmount,fcouponDiscountAmount}=calculateTotal();
    return(
       
        <>
        <h2>shopping Cart</h2>
        {listItems.length===0?<h2> your cart is empty</h2>:
        <>
        <ul>{listItems}</ul>
        <p>Total before discounts:${ftotal}</p>
        <button onClick={()=>applyDiscount(10)}>Apply 10% Discount</button>
        <button onClick={()=>applyDiscount(20)}>Apply 20% Discount</button>
        <button onClick={()=>applyDiscount(30)}>Apply 30% Discount</button>
        <p>Discount percentage Applied:${dpamount}%</p>
        <p>Discount Amount:${fdiscountAmount}</p>
        <label>Apply cuponDiscount:</label>
        <input type="text" onChange={(e)=>setCouponCode(e.target.value)} placeholder="Enter couponCode" /><br></br>
        <button onClick={handleApplyCoupon}>Apply Cupon </button>
        <p>coupon Discount Amount:{fcouponDiscountAmount}</p>
        <p>Final Amount after Discount:${ffinalAmount}</p>

        </>
        
        }


        
        </>
    )
}
export default Cart;