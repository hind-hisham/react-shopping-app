import Nav from "./Nav"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteItem,incremente,decremente } from "./cartSlice"
import { useState } from "react"

const Cart = () => {
  const dispatch=useDispatch();
  const cartItems =useSelector(state => state.cart);
  const [toggle,setToggle]=useState(false);

  const toggleBtn =()=>{
    setToggle(!toggle);
  }
  const msg=()=>{
    return(
      <div className="cover">
        <div className="msg">
          <button className="cloes" onClick={toggleBtn}>X</button>
          <h3>Comming Soon 😍 !</h3>
        </div>
      </div>
    )
  }


  let totle=cartItems.reduce((acc,cur) =>{
     acc += cur.price *cur.quantity;
     return acc
  },0)

  let totleCartItems=cartItems.reduce((acc,cur) => {
    acc +=cur.quantity;
    return acc;
  },0)

  let cartItemsRender='';
  if(cartItems.length >0) {
    cartItemsRender = cartItems.map(plant => (
      <div className="cart-card" key={plant.id}>
        <div className="img">
          <img src= {`plants/${plant.imgUrl}`} alt="" />
        </div>
        <div className="info">
          <h5>{plant.name}</h5>
          <p>$ {plant.price}</p>
          <div>
            <button onClick={()=> dispatch(incremente(plant))}>+</button> {plant.quantity} <button className={plant.quantity<= 1 ? "disable" : ''} onClick={()=> dispatch(decremente(plant))}>-</button> 
          </div>
          <b>Total: $ {plant.quantity * plant.price}</b>
          <button className="delete-btn" onClick={()=> dispatch(deleteItem(plant))}>Delete</button>
        </div>
      </div> ))
  }else{
    cartItemsRender='The cart is empty'
  }

  return (
    <>
    <Nav/>
    <section className="cart">
      <h3>Your Items: {totleCartItems} - Total Price: ${totle}</h3>
      {cartItemsRender}
      <Link to='/products'><button className="btn">Continue Shopping</button></Link>
      <button className="btn" onClick={toggleBtn}>Checkout</button>
      { toggle ? msg() : ""}
    </section>
    </>
  )
}

export default Cart
