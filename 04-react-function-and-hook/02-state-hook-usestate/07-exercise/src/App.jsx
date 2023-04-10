import React, { useState } from 'react';

function App() {
    // adding state here.
const [choices, setChoices] = useState()

  // const handleClick = (value) => {
  //   // code here.
  //   setChoices(value);
  // };

  return (
    // <div>
    //   <button onClick={() => handleClick('Fullname')}>Fullname</button>
    //   <button onClick={() => handleClick('Age')}>Age</button>
    //   <button onClick={() => handleClick('Picture')}>Picture</button>
    //   <DisplayInfo choicesValue={choices}/>
    // </div>
    <div>
      <button onClick={() => setChoices('Fullname')}>Fullname</button>
      <button onClick={() => setChoices('Age')}>Age</button>
      <button onClick={() => setChoices('Picture')}>Picture</button>
      <DisplayInfo choicesValue={choices}/>
    </div>
  );
}

function DisplayInfo(props) {

  
 
  let content ='';
  if (props.choicesValue === 'Fullname') {
    content = <h2>John Doe</h2>;
  } else if (props.choicesValue === 'Age') {
    content = <h2>30</h2>;
  } else if (props.choicesValue === 'Picture') {
    content = <img width={200} src="https://rnz-ressh.cloudinary.com/image/upload/s--7yAMXCvu--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1656446001/4LPFVF5_cat_nip_jpg" alt="Placeholder" />;
  } else {
    content = <p>Please select an option.</p>;
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default App;
