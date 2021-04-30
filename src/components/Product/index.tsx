import React, { useEffect, useState } from 'react';
import * as S from './Product.style'
import api from '../../services/api'

interface Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
}

const Product = () => {
    const [Products, setProducts] = useState<Product[]>([]);

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
        <S.Container>
            { Products?.map((product) => (
                <S.Card key={product.id}>
                    <S.Image>
                        <img
                            src={product.imageUrl}
                            alt=""
                            width='100%'
                            height='100%'
                        />
                    </S.Image>
                    <S.Description>
                        <S.ProductName>{product.name}</S.ProductName>
                        <S.UnitPrice>{product.price}</S.UnitPrice>
                        <S.TotalPrice>R$ 1,23</S.TotalPrice>
                    </S.Description>
                </S.Card>))}
        </S.Container>


    )
}

export default Product;