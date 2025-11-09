// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bug Tracker</h1>
        <Routes>
          <Route path="/bugs" component={BugList} />
          <Route path="/new" component={BugForm} />
          <Route path="/" exact component={BugList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
