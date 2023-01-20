import { useLocation, useNavigate } from "react-router-dom";

import Item from "./item.interface";

import styles from './checkout.module.scss'

const CheckoutPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const cartItems = state as Item[];

    return (
        <>
            <div className={styles.header} />
            {
                cartItems.length === 0
                    ? <center>Sem itens adicionados no carrinho.</center>
                    : <div className={styles.container}>
                        <div>
                            {cartItems.map((item: Item) => (
                                <div className={styles.content}>
                                    <div>{item.quantity}x {item.name}</div>
                                    <div>{item.price}</div>
                                </div>
                            ))}

                            <div className={styles.content}>
                                <div>TOTAL</div>
                                {
                                    cartItems.map(item => item.quantity * item.price)
                                        .reduce(function (accumulator: number, value: number) {
                                            return accumulator + value
                                        }, 0)
                                }
                            </div>
                        </div>
                        <center>
                            <button onClick={() => navigate('/confirm')}>Efetuar Pagamento</button>
                        </center>
                    </div>
            }

        </>
    )
}

export default CheckoutPage;