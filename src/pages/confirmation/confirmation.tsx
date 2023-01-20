
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import FlutterChannelService from '../../services/FlutterChannel.service';

import Item from '../checkout/item.interface';

import styles from './confirmation.module.scss'

const ConfirmationPage = () => {

    const { state } = useLocation();
    const cartItems = state as Item[];

    useEffect(() => {
        setTimeout(() => {
            FlutterChannelService.sendMessage(JSON.stringify(cartItems));
            FlutterChannelService.backToFlutter();
        }, 3000);
    }, [])

    return (
        <>
            <div className={styles.header} />
            <center>
                Parabéns você será redirecionado de volta para o App em alguns segundos...
            </center>
        </>
    )
}

export default ConfirmationPage;