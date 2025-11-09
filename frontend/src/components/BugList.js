
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BugList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      const response = await axios.get('http://localhost:5000/api/bugs');
      setBugs(response.data);
    };
    fetchBugs();
  }, []);

  return (
    <div className="bug-list">
      <h2>Reported Bugs</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id}>
            <h3>{bug.title}</h3>
            <p>{bug.description}</p>
            <p>Status: {bug.status}</p>
            <button>Update Status</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;
