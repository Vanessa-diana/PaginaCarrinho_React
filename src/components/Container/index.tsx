import React, { ReactNode } from 'react';
import * as S from './Container.style'


interface Iprops {
    children : ReactNode;
}

const Container = ({ children } :Iprops) => (
    
    <S.Container>
       { children }
    </S.Container>
    
)

export default Container;