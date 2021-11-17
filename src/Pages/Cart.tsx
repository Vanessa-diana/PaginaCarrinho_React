import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import api from '../services/api';
import Footer from '../components/Footer';


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
            <Header />
            <Product products={products} />
            <Footer />
        </React.Fragment>

    )
};


export default Cart;