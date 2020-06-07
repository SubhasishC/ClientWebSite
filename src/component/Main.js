import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Aboutus from './AboutUs'
import ContactUs from './ContactUs'
import FAQComponent from './faq';
import Registration from './registrationForm'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/home' component={HomePage}/>
      <Route path='/aboutus' component={Aboutus}/>
      <Route path='/contactus' component={ContactUs}/>
      <Route path='/faq' component={FAQComponent}/>
      <Route path='/register' component={Registration}/>
    </Switch>
  </main>
)

export default Main
