import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Content />
        <Footer />
        <Challenge />
      </div>
    );
  }
}

// Code below!!!!

class Header extends React.Component {
  render() {
    return (
      // Code here
      // <Header />
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      // Code here
      // <Content />
      <main>
            <Temperature />    
      </main>
    );
  }
}

class Temperature extends React.Component {
  render() {
    const temperature = 40
    return (
      // Code here
      // <Temperature />
    <div id="temperature">
      <span>{ temperature } Oc</span>
    </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      // Code here
      // <Footer />
      <footer>
                <button>Up</button>
                <button>Down</button>
            </footer>
    );
  }
}

class Challenge extends React.Component {
  pop() {
    alert('AAAAAAAAHHH!!!!!');
  }
  render() {
    return (
      // Code here
      // <Challenge />
      <div onHover={this.pop}>
    </div>
    )
  }
}

export default App;