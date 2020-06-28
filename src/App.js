import React from 'react';
import Header from './component/Header';
import Main from './component/Main'
import Footer from './component/Footer';
import Navigation from './component/NavigationBar';
import HomePage from './component/HomePage';
import NavHeader from './component/NavHeader'

function App() {
  return (
    <div>
        {/* {window.location.pathname === '/home' ? <Header /> : null}   */}
        <Navigation/>
        <Main />
        <Footer />

    </div>
   
  );
}

export default App;
