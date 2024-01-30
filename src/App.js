import { useState } from 'react';
import Dashboard from './container/Dashboard';
import Post from './container/Post';
import Posts from './container/Posts';

function App() {
  return (
    <div className="App" >
        <h1> Posts </h1>
        <Dashboard />
    </div>
  );
}

export default App;
