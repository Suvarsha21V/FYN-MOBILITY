// src/App.js

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SortableList from './components/SortableList';
import './App.css';

const App = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h2>Drag & Drop Sortable List</h2>
        <SortableList items={items} setItems={setItems} />
      </div>
    </DndProvider>
  );
};

export default App;