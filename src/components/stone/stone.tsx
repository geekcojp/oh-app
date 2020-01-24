import React from 'react';
import {Container} from './styled';
import {Props} from './types';

const Stone = React.memo<Props>(({color = 'black'}) => {
  return (
    <Container className={color} />
  );
})

export default Stone;
