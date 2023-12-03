interface Items {
  item: {
    listing_id: number,
    url: string,
    MainImage?: {
      url_570xN: string,
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
  }[];
}

const Listing = ({ item }: Items) => {
  return (
    <div className="item-list">
      {item.map(item => <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href="#">
            <img src={item.MainImage?.url_570xN} alt={item.title} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title}</p>
          <p className="item-price">{item.price}</p>
          <p className="item-quantity level-medium">{item.quantity}</p>
        </div>
      </div>)}
    </div>
   
  )
}

export default Listing;