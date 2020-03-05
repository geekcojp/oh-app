import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Board from './components/board/board';
import Stone from './components/stone/stone';
import {RootState} from './redux/rootreducers';
import {StoneTypes} from './redux/types';

const App: React.FC = () => {
  const stoneItems = useSelector(
    (state: RootState) => state.stoneItems,
  );
  const dispatch = useDispatch()

  const handleClick = useCallback((stoneItem: any)  => {
    // event.preventDefault();
    console.log('click');

    const color = stoneItem.color
    console.log("handleClick -> color", color);
    const position = stoneItem.position
    dispatch({color, position})
  },[dispatch]);

  return (
    <div className="App">
      <Board>
        {
          stoneItems.map((stoneItem: StoneTypes)=>(
            <Stone onClick={handleClick} {...stoneItem} key={stoneItem.id} />
          ))
        }
      </Board>
    </div>
  );
}

export default App;
