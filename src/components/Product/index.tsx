import * as S from './Product.style'

export interface IProduct {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    additionalInfo: {
        brandName: string;
    }
}

interface Iprops {
    products: IProduct[];
}

const Product: React.FC<Iprops> = ({ products }) => {

    const priceFormated = (value: number) => {
        return value.toLocaleString('pt-br',
            {style: 'currency', 
            currency: 'BRL'
        });
    }

    const subtotal = products.reduce((sum, product) => {
        return sum + product.price;

    }, 0);

    const isFreeShipping = subtotal > 10;

    const calculaFrete = () => {
        let frete = 10;
        if (isFreeShipping) {
            frete = 0
        }

        return frete;
    };

    const total = () => {
        return subtotal + calculaFrete();
    }

    return (
        <S.Container>
            {products?.length &&
                products.map((product) => (
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
                        <S.UnitPrice>{priceFormated(product.price)}</S.UnitPrice>
                        <S.TotalPrice>{priceFormated(product.price)}</S.TotalPrice>
                        <S.ProductBrand>{product.additionalInfo.brandName}</S.ProductBrand>
                    </S.Description>
                </S.Card>))}
                <S.BoxValue>
                    <S.Value>Subtotal: <strong>{priceFormated(subtotal)}</strong></S.Value>
                    <S.Value>Frete:<strong>{priceFormated(calculaFrete())}</strong></S.Value>
                    <S.Value>Total:<strong>{priceFormated(total())}</strong> </S.Value>
                </S.BoxValue>
            {isFreeShipping &&
                <S.ShippingFree>Parabéns,sua compra tem frete grátis</S.ShippingFree> }
        </S.Container>
    )
}

export default Product;