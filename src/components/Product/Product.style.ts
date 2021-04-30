import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    flex-wrap:wrap;
`;

export const Image = styled.div`
    border: 1px ridge #DCDCDC;
    margin: 0 10px 16px 5px;
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
   
`
