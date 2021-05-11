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
        return (value / 100).toString().replace(".", ",");
    }


    const subtotal = products.reduce((sum, product) => {
        return sum + product.price;

    }, 0);


    const calculaFrete = () => {
        let frete = 10;
        if (subtotal > 1000) {
            frete = 0
        }

        return frete;
    }

    const total = () => {
        return subtotal + calculaFrete();
    }


    return (
        <S.Container>
            {  products.length > 0 &&
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
                            <S.UnitPrice>{`R$ ${priceFormated(product.price)}`}</S.UnitPrice>
                            <S.TotalPrice>{`R$ ${priceFormated(product.price)}`}</S.TotalPrice>
                            <S.ProductBrand>{product.additionalInfo.brandName}</S.ProductBrand>
                        </S.Description>
                    </S.Card>))}
            <S.Value>Subtotal: <strong> R$ {priceFormated(subtotal)}</strong></S.Value>
            <S.Value>Frete:<strong>{`R$ ${calculaFrete()}`}</strong></S.Value>
            <S.Value>Total:<strong>{priceFormated(total())}</strong> </S.Value>
            { subtotal > 10 &&
            <S.ShippingFree>Parabéns,sua compra tem frete grátis</S.ShippingFree> }
        </S.Container>


    )
}

export default Product;