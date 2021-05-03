import React from 'react';
import * as S from './Button.style'

interface IButtom {
    title: string
}

const Button = ({ title }: IButtom) => (
    <S.Button>{title}</S.Button>

)

export default Button;