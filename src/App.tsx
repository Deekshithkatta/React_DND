import React from 'react';
import logo from './logo.svg';
import './App.css';
import {initialData} from './initial_data'
import {Column} from './Column'
function App() {
  return (
    <div className="App">
      {
        initialData.columns["column-1"].title
      }
      {
        initialData.columns["column-1"].taskIds.map((cIds)=>(
          <Column key={initialData.columns["column-1"].id} column={initialData.columns["column-1"].id} tasks={cIds} />
        ))
      }
    </div>
  );
}

export default App;
