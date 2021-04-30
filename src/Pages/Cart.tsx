import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Product from '../components/Product';
import Title from '../components/Title';
import api from '../services/api';


interface IProduct {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    additionalInfo: {
        brandName: string;
    }
}

const Cart = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await api.get('items');
            setProducts([
                ...data
            ]);
        }
        fetchProducts();

    }, []);

    return (

        <React.Fragment>
            <Title />
            <Container>
                <Product products={products}/>
            </Container>
        </React.Fragment>

)};


export default Cart;