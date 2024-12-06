import { Link } from "react-router-dom"
function Home() {
  return (
    <section className='hero-section'>
      <div className="overlay"></div>
    <div className="left">
      <h2>Welcome To Paradise Nursery</h2>
      <div className="line"></div>
      <p>Where Green Meets Serenity</p>
      <Link to='/products'><button type='button' className='btn'>get started</button></Link>
    </div>
    <div className="right">
      <p>Provident unde excepturi, sapiente aperiam debitis vel pariat</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde excepturi, sapiente aperiam debitis vel pariatur, eum quis rerum consectetur ab aut quae. Nihil exercitationem repellendus ducimus eius explicabo sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde excepturi, sapiente aperiam debitis vel pariatur, eum quis rerum consectetur ab aut quae. Nihil exercitationem repellendus ducimus eius explicabo sapiente.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde excepturi, sapiente aperiam debitis vel pariatur, eum quis rerum consectetur ab aut quae. Nihil exercitationem repellendus ducimus eius explicabo sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde excepturi, sapiente aperiam debitis vel pariatur, eum quis rerum consectetur ab aut quae. Nihil exercitationem repellendus ducimus eius explicabo sapiente.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde excepturi, sapiente aperiam debitis vel pariatur, eum quis rerum consectetur ab aut quae.</p>
    </div>
  </section>
  )
}

export default Home
