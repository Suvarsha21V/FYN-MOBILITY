// src/components/SortableList.js

import React from 'react';
import SortableListItem from './SortableListItem';

const SortableList = ({ items, setItems }) => {
  const moveItem = (dragIndex, hoverIndex) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <div className="sortable-list">
      {items.map((item, index) => (
        <SortableListItem key={item} index={index} item={item} moveItem={moveItem} />
      ))}
    </div>
  );
};

export default SortableList;