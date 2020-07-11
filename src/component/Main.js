import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Aboutus from './AboutUs'
import ContactUs from './ContactUs'
import FAQComponent from './faq';
import Registration from './registrationForm'
import Media from './Media'
import { Login } from './Login'
import Content from './CourseContent'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/home' component={HomePage}/>
      <Route path='/aboutus' component={Aboutus}/>
      <Route path='/contactus' component={ContactUs}/>
      <Route path='/faq' component={FAQComponent}/>
      <Route path='/register' component={Registration}/>
      <Route path='/media' component={Media}/>
      <Route path='/login' component={Login}/>
      <Route path='/apsc' component={Content}/>
      <Route path='/signIn' component={() => <SignIn name={'Student Login'} />}/>
      <Route path='/signInAsAdmin' component={() => <SignIn name={'Admin Login'} />}/>
      <Route path='/studentProfile' component={Student}/>

    </Switch>
  </main>
)

export default Main
