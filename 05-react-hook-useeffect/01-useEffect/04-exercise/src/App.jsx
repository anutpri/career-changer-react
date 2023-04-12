// import React from 'react';
import React, { useState } from 'react';

function App() {

  const [name, setName] = useState();
  const [organization, setOrganization] = useState();
  const [position, setPosition] = useState();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something?
  // }

  const handleInputChangeName = (event) => {
    setName(event.target.value);
  };

  const handleInputChangeOrganization = (event) => {
    setName(event.target.value);
  };

  const handleInputChangePosition = (event) => {
    setName(event.target.value);
  };

  const addUser = () => {
    
  }

  const user = [{
    name: 'John',
    organization: 'ABC Inc.',
    position: 'Developer'
  },
  {
    name: 'Jane',
    organization: 'XYZ Corp.',
    position: 'Designer'
  },
  {
    name: 'Bob',
    organization: '123 LLC',
    position: 'Manager'
  }];
  


  const printUser = (item) => {
    return (
          <tr>
            <td>{item.name}</td>
            <td>{item.organization}</td>
            <td>{item.position}</td>
          </tr>)
  };

  return (
    <div className="App"> {/* Add class name */}
      <h1>Table Example</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type new name here" style={{margin: '4px'}} onChange={handleInputChangeName} />
        <input type="text" placeholder="Type new organization here" style={{margin: '4px'}} onChange={handleInputChangeOrganization} />
        <input type="text" placeholder="Type new position here" style={{margin: '4px'}} onChange={handleInputChangePosition} />
        <button type="submit" style={{margin: '4px'}} onClick={}>Save</button>
        </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {user.map(printUser)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
