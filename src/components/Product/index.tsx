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

const Product = ({ products }: Iprops) => {

    function priceFormated(value:number){
        return (value / 100).toString().replace(".", ",")
    
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
                            <S.UnitPrice>R$  { priceFormated(product.price)}</S.UnitPrice>
                            <S.TotalPrice>R$ { priceFormated(product.price)}</S.TotalPrice>
                            <S.ProductBrand>{product.additionalInfo.brandName}</S.ProductBrand>
                        </S.Description>
                    </S.Card>))}
        </S.Container>


    )
}

export default Product;