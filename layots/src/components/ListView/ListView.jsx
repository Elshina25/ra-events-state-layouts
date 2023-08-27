import ShopItem from "../ShopItem/ShopItem";

export default function ListView({items}) {
    return (
        <div className="items-view">
            {items.map(item => {
                return <ShopItem item={item} key={item.id}/>
            })}
        </div>
    )
}