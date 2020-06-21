import React from 'react';
import Header from './component/Header';
import NavBar from './component/NavBar'
import Main from './component/Main'
import Footer from './component/Footer';
import Navigation from './component/NavigationBar';
import HomePage from './component/HomePage';

function App() {
  return (
    <div>
        {window.location.pathname === '/home' ? <Header /> : null}  
        <Navigation />
        <Main />
    </div>
   
  );
}

export default App;
