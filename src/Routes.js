import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Customize from './Components/Customize'
import Home from './Components/Home'
import Store from './Components/Store'
import Account from './Components/Account'
import Progress from './Components/Progress'
import History from './Components/History'
import Details from './Components/Details'
import Payment from './Components/Payment'
import Userbook from './Components/Userbook'
import Login from './Components/Login'




const Routes = () => (
   <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/Home' component={Home}/>
        <Route path='/Customize' component={Customize}/>
        <Route path='/Store' component={Store}/>
        <Route path='/Account' component={Account}/>
        <Route path='/Progress' component={Progress}/>
        <Route path='/History' component={History}/>
        <Route path='/Details' component={Details}/>
        <Route path='/Payment' component={Payment}/>
        <Route path='/Userbook' component={Userbook}/>
        </Switch>
        </main>
  )
  
  export default Routes;
