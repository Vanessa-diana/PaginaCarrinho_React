import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px;
    flex-wrap:wrap;
    border-bottom: 1px ridge #DCDCDC;
`;

export const Image = styled.div`
    border: 1px ridge #DCDCDC;
    margin-right: 16px;
    padding: 0 3px;
    width: 4.5rem;
    height: 4.5rem;
`;

export const Description = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export const ProductName = styled.span`
    width: 100%;
    font-size: 16px;
    font-weight: bold;

`;

export const UnitPrice = styled.span`
    width: 100%;
    font-size: 12px;
    color: #BEBEBE;
    font-weight: bold;
`;

export const TotalPrice = styled.span`
    width: 100%;
    font-size: 14px;
    color: var(--black);
`
export const Card = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
`;

export const ProductBrand = styled.span`
    font-size: 14px;
    font-weight: bold;
    text-transform: lowercase;
`;

export const BoxValue = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding:0 16px;
`;

export const Value = styled.span`
    display:flex;
    font-size: 1rem;
    width: 100%;
    padding: 5px 10px;
    justify-content: flex-end;

    strong {
        font-size: 0.8rem;
        padding-left: 10px;
    }
`;

export const ShippingFree = styled.span`
    display: flex;
    font-size: 14px;
    background:var(--green-light);
    color:var(--green);
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    justify-content: center;
    margin: 10px 24px;
    font-weight: 600;
`;
