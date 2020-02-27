import React from 'react';
import {Container} from './styled';
import {Props} from './types';

const Stone = React.memo<Props>(({color = ''}) => {
  return (
    <Container className={color} />
  );
})

export default Stone;
