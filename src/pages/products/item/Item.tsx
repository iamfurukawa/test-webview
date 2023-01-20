import Item from "../../checkout/item.interface";

import styles from './item.module.scss'

interface ItemProps {
    product: Item
    addToCart: Function
}

const ItemComponent = (itemProps: ItemProps) => {

    const { product, addToCart } = itemProps;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={product.icon} />
                <div className={styles.product}>
                    <div>{product.name}</div>
                    <b>R${product.price}</b>
                </div>
            </div>
            <div className={styles.plus} onClick={() => addToCart(product)}>+</div>
        </div>
    )
}

export default ItemComponent;