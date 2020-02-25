import React from 'react';
import {Container} from './styled';

const Board = React.memo<React.PropsWithChildren<{}>>(({children}) => {
  return (
    <Container>{children}</Container>
  );
})

export default Board;
