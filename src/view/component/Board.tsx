import {useState} from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import List from './List';

type BoardProps = {
  droppableId: string;
  title: string;
};

export const Board = (props: BoardProps) => {
  const initial: any[] = Array.from({length: 10}, (v, k) => k).map((k) => {
    return {
      id: `id-${k}`,
      content: `Item ${k}`,
    };
  });
  const [state, setState] = useState({items: initial});
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEnd = (result) => {
    const {source, destination} = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        state.items,
        result.source.index,
        result.destination.index
      );

      setState({items});
    }
  };
  return (
    <div>
      <p>
        {props.title}
        <span style={{marginLeft: 10}}>{state.items.length}</span>
      </p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={props.droppableId}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} style={{width: 250, margin: '0 10px'}}>
              <List items={state.items} />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
