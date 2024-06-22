import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
function DraggableList() {
    const [items, setItems] = React.useState(initialItems);
    const onDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedItems = [...items];
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);
        setItems(reorderedItems);
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {items.map((item, index) => (
                            <Draggable key={item} draggableId={item} index={index}>
                                {(provided) => (
                                    <li
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        {item}
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}
export default DraggableList;