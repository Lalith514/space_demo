import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 style={{color: "red"}}>Space energy systems</h1>
      <form>
        <p>Login</p>
        <input type="email" placeholder="Email"/><br/>
        <input type="password" placeholder="Password"/><br/>
        <input type="button" value="submit"/>
      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
}

export default App;
