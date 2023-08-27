export default function ShopItem ({item}) {
    return (
        <div className="item">
            <span className="item-name">{item.name}</span>
            <span className="item-color">{item.color}</span>
            <img className="item-img" src={item.img} alt={item.name}/>
            <span className="item-price">{item.price}</span>
            <button className="item-add">Add to cart</button>
        </div>
    )
}