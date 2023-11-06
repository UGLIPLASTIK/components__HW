import './App.css'
import React from 'react';

const product = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£',
}

class ShopItemClass extends React.Component {
  render() {
    return <div className="main-content">
    <h2>{this.item.brand}</h2>
    <h1>{this.item.title}</h1>
    <h3>{this.item.description}</h3>
    <div className="description">
      {this.item.descriptionFull}
    </div>
    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
    <div className="divider"></div>
    <div className="purchase-info">
      <div className="price">{this.item.price}</div>
      <button>Добавить в корзину</button>
    </div>
  </div>
  }
}

function App() {
  return <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass brand = {product.brand}
                       title = {product.title}
                       description = {product.description}
                       descriptionFull = {product.descriptionFull}
                       price = {product.currency + product.price} />
      </div>
    </div>
}

export default App
