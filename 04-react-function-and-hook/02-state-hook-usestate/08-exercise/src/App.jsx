import React, { useState } from 'react';

function App() {

    const [name, setname] = useState()
    const [bio, setbio] = useState()

    // const handleInputChange = (event) => {
    //     setname(event.target.value);
       
    //   };

    const handleInputChangeBio = (event) => {
        setbio(event.target.value);
      };

    return (
      <div id="app">
      <img width={200} src="https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="Sleepy Cat"/>
      <br></br>
      <input type="text" id="name" name="name" placeholder='Type new name here' onChange={(event) => { setname(event.target.value)}}/> 
      <input type="text" id="bio" name="bio" placeholder='Type new bio here' onChange={handleInputChangeBio}/> 
        <Info nameValue = {name} bioValue = {bio}/>
        <Social />
      </div>
    );
  }
  
  function Info(props) {
    
    return (
      // Code here
      // <Header />
      <div>
          <h1>{props.nameValue}</h1>
          <p>{props.bioValue}</p>
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