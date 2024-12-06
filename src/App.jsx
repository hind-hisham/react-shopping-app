import Home from './page/Home'
import Cart from './page/Cart'
import Products from './page/Products'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}  />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
