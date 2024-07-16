// src/components/SortableListItem.js

import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'ITEM';

const SortableListItem = ({ item, index, moveItem }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`item ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {item}
    </div>
  );
};

export default SortableListItem;