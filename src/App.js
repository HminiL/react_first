import React from 'react'
import {Route} from 'react-router-dom'
import logo from './images/first.jpg';
import OnlineProfile from './components/OnlineProfile'
import CourseRegister from './components/CourseRegister'
import SchoolStatus from './components/SchoolStatus'
import Anchor from './components/Anchor'
import Color from './components/Color'
import DateMonth from './components/DateMonth'
import Join from './components/Join'
import Login from './components/Login'
import Home from './components/Home'


const App =() => (
  <>
  <Route  exact path= '/' component = {Home}/>
  <Route  exact path= '/home' component = {Home}/>
  <Route  exact path= '/course-register' component = {CourseRegister}/>  
  <Route  exact path= '/online-profile' component = {OnlineProfile}/>
  <Route exact path= '/login' component = {Login} />
  <Route  exact path= '/join' component = {Join}/>
  <Route  exact path= '/school-status' component = {SchoolStatus}/>
  </>
);

export default App;
 