import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  additionalInfo: {
    brandName: string;
  };
}

const Cart = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('./db.json', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.items));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Product products={products} />
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
