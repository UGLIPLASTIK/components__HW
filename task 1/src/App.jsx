/* eslint-disable react/prop-types */
import './App.css'


const ShopItemFunc = ({ brand, title, description, descriptionFull, price }) => {
  return <div className="main-content">
    <h2>{brand}</h2>
    <h1>{title}</h1>
    <h3>{description}</h3>
    <div className="description">
      {descriptionFull}
    </div>
    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
    <div className="divider"></div>
    <div className="purchase-info">
      <div className="price">{price}</div>
      <button>Добавить в корзину</button>
    </div>
  </div>
}

const product = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£',
}

function App() {
  return <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc {...product}/>
      </div>
    </div>
    }

export default App
