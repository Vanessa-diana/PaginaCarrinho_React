import React from 'react';
import * as S from './Button.style'

interface IButton {
    title: string
}

const Button = ({ title }: IButton) => (
    <S.Button>{title}</S.Button>

)

export default Button;