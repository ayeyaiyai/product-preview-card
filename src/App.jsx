import './App.css'
import cartIcon from './images/icon-cart.svg';

function App() {

  return (
    <div className='container'>
      <div className='preview-container'>
        <div className='preview-left'></div>
        <div className='preview-right'>
          <div className='category'>PERFUME</div>
          <div className='title'>Gabrielle Essence Eau De Parfum</div>
          <div className='subtitle'>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</div>
          <div className='price-section'>
            <div className='current-price'>$149.99</div>
            <div className='last-price'>$169.99</div>
          </div>
          <div className='add-to-cart'><img src={cartIcon} alt='cart icon' className='cart-icon'/><span id='add-to-cart-text'>Add to Cart</span></div>
        </div>
      </div>
    </div>
  )
}

export default App