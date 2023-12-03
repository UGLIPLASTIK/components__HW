interface Items {
  item: {
    listing_id: number,
    url: string,
    MainImage: {
      url_570xN: string,
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    state?: string,
  }[];
}

const Listing = ({ item }: Items) => {

  function cutTitle(str: string): string | undefined {
    if (str.length > 50) 
    return str.substring(0, 49)+'...'
    else return str
  }

  function setCurrency(code: string, value: string): string | undefined {
    if (code == 'USD') return '$' + value
    else if (code == 'EUR') return '€'+ value
    else return value + ' ' + code
  }

  function setQuantity(quantity: number): string | undefined{
    if (quantity <= 10) return 'level-low'
    else if (quantity <= 20) return 'level-medium'
    else return 'level-high'
  }

  return (
    <div className="item-list">
      {item.map(item => {
        if (item.state == 'active') return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href="#">
                <img src={item.MainImage.url_570xN} alt={item.title} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{cutTitle(item.title)}</p>
              <p className="item-price">{setCurrency(item.currency_code, item.price)}</p>
              <p className={`item-quantity ${setQuantity(item.quantity)}`}>{item.quantity} left</p>
            </div>
          </div>
          )})}
    </div>
  )
}

export default Listing;