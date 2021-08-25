import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
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
import Navigation from './components/Navigation';
import styled from 'styled-components';
import Header from './components/Header';


const App =() => (<Layout><Header /><Navigation />
  <Switch>
  <Route  exact path= '/' component = {Home}/>
  <Redirect  from = '/home' to = {'/'}/>
  <Route  exact path= '/course-register' component = {CourseRegister}/>  
  <Route  exact path= '/online-profile' component = {OnlineProfile}/>
  <Route exact path= '/login' component = {Login} />
  <Route  exact path= '/join' component = {Join}/>
  <Route  exact path= '/school-status' component = {SchoolStatus}/>
  </Switch></Layout>
);

const Layout = styled.div`
margin: 0 auto
display: flex;
width: 100%;
flex-flow: row wrap;
`

export default App;
 