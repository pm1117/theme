import {Button} from 'antd';
import {Draggable} from 'react-beautiful-dnd';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  padding: grid * 1,
  margin: `0 0 ${grid}px 0`,
  border: `1px solid gray`,
  borderRadius: 3,
  opacity: isDragging ? 0.5 : 1,
  ...draggableStyle,
});

const List = ({items}) => (
  <>
    {items.map((item, index: number) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            {item.content}
          </div>
        )}
      </Draggable>
    ))}
    <Button type="text">+ 新規</Button>
  </>
);

export default List;
