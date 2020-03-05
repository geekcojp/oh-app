import React from 'react';
import {Container} from './styled';
import {Props} from './types';

const Stone = React.memo<Props>(({color = '', potition, onClick}: any) => {
  return (
    <Container className={color} onClick={onClick(color, potition)} />
  );
})

export default Stone;
