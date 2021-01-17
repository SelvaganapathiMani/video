import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/responsive.css';
import Head from './component/header';
import Nav from './component/menu/nav';

function App() {
  return (
    <div className="overflow">
      <Head/>
      <Nav/>
      </div>
  );
}

export default App;
