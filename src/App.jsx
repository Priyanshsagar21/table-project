import React from 'react';
import './App.css';

const App = () => {
  const arr = [
    { id: 1, name: 'Gujarati Spice', Address: '456 Mahuva Road, Savarkundla', Passcode: '364515', Rating: '4.5' },
    { id: 2, name: 'Punjabi Delight', Address: '789 Lathi Road, Amreli', Passcode: '365601', Rating: '4.0' },
    { id: 3, name: 'Chines Garden', Address: '123 Devla Gait, Savarkundla', Passcode: '364515', Rating: '4.2' },
    { id: 4, name: 'South Fusion', Address: '567 Mahuva Road, Savarkundla', Passcode: '364515', Rating: '4.5' },
    { id: 5, name: 'Kathiyavadi Taste', Address: '987 Bypass, Amreli', Passcode: '365601', Rating: '4.0' },
    { id: 6, name: 'Kathiyavadi Taste', Address: '987 Bypass, Amreli', Passcode: '365601', Rating: '4.0' },
  ];

  return (
    <div>
      <h1>Food Explorer</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Passcode</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.Address}</td>
                <td>{item.Passcode}</td>
                <td>{item.Rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;