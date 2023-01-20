import Item from "../checkout/item.interface";

import Extra from './icons/EXTRA.png';
import Psn from './icons/PSN.png';
import Xbox from './icons/XBOX.png';
import Spotify from './icons/SPOTIFY.png';

const products = [
    { icon: Extra, name: 'Extra Gift Card', price: 200 },
    { icon: Psn, name: 'PSN Gift Card', price: 350 },
    { icon: Xbox, name: 'Game Pass Gift Card', price: 99.99 },
    { icon: Spotify, name: 'Spotfy Premium Gift Card', price: 30.99 },
] as Item[];

export default products;
