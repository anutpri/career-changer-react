import React from 'react';


function App() {
    return (
      <div id="app">
        <h1>Create User</h1>
        <Input />
        <Print />
      </div>
    );
  }

function Input({ name, organization, position, handleInputChange, handleSubmit }) {
    // const user = {
    //   name: '',
    //   organization: '',
    //   position: '',
    // };
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <input type="text" id="name" name="name" placeholder='Type new name here' value={name} onChange={handleInputChange}/> 
            <input type="text" id="organization" placeholder='Type new organization here' name="organization" value={organization} onChange={handleInputChange}/> 
            <input type="text" id="position" name="position" placeholder='Type new position here' value={position} onChange={handleInputChange}/> 
            <button type="submit">Save</button>
        </div>
        </form>
    );
}

function Print({ name, organization, position }) {
   
    return (
        // <div>
        // <label htmlFor="name">Name</label> 
        // <label htmlFor="organization">Organization</label> 
        // <label htmlFor="position">Poition</label>
        // <p>{name}</p> 
        // <p>{organization}</p> 
        // <p>{position}</p>
        // </div>
        
        <table>
            <tr>
                <td><h4>Name</h4></td>
                <td><h4>Organization</h4></td>
                <td><h4>Poition</h4></td>
            </tr>
            <tr>
                <td>John</td>
                <td>ABC Inc.</td>
                <td>Developer</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>XYZ Corp.</td>
                <td>Designer</td>
            </tr>
            <tr>
                <td>Bob</td>
                <td>123 LLC</td>
                <td>Manager</td>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{organization}</td>
                <td>{position}</td>
            </tr>
        </table>
            );
    }

export default App;