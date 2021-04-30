import React from 'react';
import Container from '../components/Container';
import Product from '../components/Product';
import Title from '../components/Title';

const Cart = () => (
    <React.Fragment>
        <Title />
        <Container>
            <Product/>
        </Container>
    </React.Fragment>

);


export default Cart;