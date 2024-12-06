import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Nav = () => {
  const cartItems=useSelector(state=>state.cart);

  let totleCartItems=cartItems.reduce((acc,cur) => {
    acc +=cur.quantity;
    return acc;
  },0)
  return (
    <nav>
        <ul>
          <li className="logo"><Link to='/'>
            <img src="logo.png" alt="logo"/>
              <div>
                <h4>Paradise Nursery</h4>
                <p>Where Green Meets Serenity</p>
              </div>
            </Link></li>
          <li><Link to='/products'><h3>Plants</h3></Link></li>
          <Link to='/cart'><li className="cartItems"><span> {totleCartItems} </span></li></Link>
        </ul>
      </nav>
  )
}

export default Nav
