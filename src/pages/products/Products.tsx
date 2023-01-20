import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Item from '../checkout/item.interface';
import ItemComponent from './item/Item';

import products from './product-items'
import Cart from './icons/cart.png';

import styles from './product.module.scss'

const ProductsPage = () => {

    const navigate = useNavigate();
    const [cart, addCart] = useState<Item[]>([])

    const add = (item: Item) => {
        let newCart = cart.filter(itemOnCart => itemOnCart.name !== item.name)
        let hasItem = cart.find(itemOnCart => itemOnCart.name === item.name) || null

        if (hasItem) {
            hasItem.quantity! += 1;
            newCart.push(hasItem)
        } else {
            item.quantity = 1;
            newCart.push(item)
        }

        addCart(newCart)
    }

    return (
        <>
            <div className={styles.header}>
                <img src={Cart} onClick={() => navigate('/checkout', { state: cart })} />
            </div>
            {
                products.map((product: Item) => (
                    <ItemComponent product={product} addToCart={add} />
                ))
            }
            {
                //JSON.stringify(cart)
            }
        </>
    )
}

export default ProductsPage;