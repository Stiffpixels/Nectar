import Slider from './Components/slider.tsx'

const Header =()=>{
  
  const slides= [
    {url:'/kaju_katli.webp', alt:'kaju katli on a table'},
    {url:'/motichur-laddu.jpg', alt:'motichur laddu in a plate'},
    {url:'/milk_cake.jpeg', alt:'milk cake on a table'}
    ]
  
  return (
  <header>
  <div className='container-nav'>
  <div className='container row'>
  <h2 className='brand-name'>Kashi</h2>
  <nav>
    <ul>
      <NavBarItem itemName='home' itemLink='#'/>
      <NavBarItem itemName='About' itemLink='#'/>
      <NavBarItem itemName='Contact' itemLink='#'/>
    </ul>
  </nav>
  </div>
  </div>
  
  <div className='hero'>
    <Slider slides={slides}/>
    <button className="hero_buy-btn">Buy Now</button>
    <div className="hero_text container">
    <h2 className="hero_title title">Make your life SWEETER</h2>
    <p className="hero_subtitle">We sell many different varieties of sweets with a price impossible to beat.</p>
    </div>
  </div>
  </header>
  )
}

const NavBarItem = ({itemName, itemLink})=>{
  return <li><a href={itemLink}>{itemName}</a></li>
}

export default Header;