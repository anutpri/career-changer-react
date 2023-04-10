import React from 'react';

function App() {
    return (
      <div id="app">
      <img width={200} src="https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="Sleepy Cat"/>
        <Info />
        <Social />
      </div>
    );
  }
  
  function Info() {
    const name = "Anut";
    const bio = "Developer";
    return (
      // Code here
      // <Header />
      <div>
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
    );
  }

  function Social() {
    return (
      // Code here
      // <Header />
      <div>
          <a href='https://www.generation.org/' target="_blank">Facebook<br></br></a>
          <a href='https://www.generation.org/'target="_blank">Twitter</a>
        </div>
    );
  }

  export default App;