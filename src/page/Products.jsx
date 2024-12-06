import Nav from "./Nav";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const Products = () => {
  const dispatch=useDispatch();
  const plantsList=useSelector(state=>state.plants);
  const cartItems=useSelector(state=>state.cart);

  const itemFound=(e)=>{
    if(cartItems.find((pro) => pro.id === e.id) ){
      return true;
    }else{
      return false;
    }
  }

  const addToCart=(e)=>{
    dispatch(addItem(e));
  }
  
  const airPurinifying=plantsList.filter(product => product.category =='Air Purifying');
  const aromaticFragrant=plantsList.filter(product => product.category =='Aromatic Fragrant');
  const flowering=plantsList.filter(product => product.category =='Flowering');

  const productsRender=(array)=>{
   return array.map(plant=>(
    <div className="card" key={plant.id}>
    <span className="tag">SALE</span>
    <span className="id">{plant.id}</span>
      <h5>{plant.name}</h5>
      <img src={`plants/${plant.imgUrl}`} alt="" />
      <p className="price">${plant.price}</p>
      <p>{plant.info}</p>
      <button type="button" className={itemFound(plant) ? 'btn disable' : 'btn'} onClick={()=> addToCart(plant)}>Add to Cart</button>
    </div>
  ))}

  return (
    <>
    <Nav/>
    <section className="products">
      <h3>Air Purinifying Plants</h3>
      <div className="cat">
      {productsRender(airPurinifying)}
      </div>
      <h3>Aromatic Plants</h3>
      <div className="cat">
      {productsRender(aromaticFragrant)}
      </div>
      <h3>Flowering Plants</h3>
      <div className="cat">
      {productsRender(flowering)}
      </div>
    </section>
    </>
  )
}

export default Products
