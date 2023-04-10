import React from 'react';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    // Code here
    // <Header />
    <header>
        <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
      </header>
  );
}

function Content() {
  return (
    // Code here
    // <Content />
    <main>
            <Temperature />    
      </main>
  );
}

function Temperature() {
  
    const temperature = 42
    return (
      // Code here
      // <Temperature />
    <div id="temperature">
      <span>{ temperature } Oc</span>
    </div>
  );
}

function Footer() {
  return (
    // Code here
    // <Footer />
    <footer>
                <button>Up</button>
                <button>Down</button>
            </footer>
  );
}

export default App;
