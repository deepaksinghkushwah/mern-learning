import {mount as productMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartIndex';
productMount(document.querySelector('#container-products'));
cartMount(document.querySelector('#container-cart'));
