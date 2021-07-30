import React from 'react'
import {Switch, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'

function App() {
  return (
    <>
    <NavBar/>
   <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/work' component={Work} />
      <Route exact path='/contact' component={Contact} />
   </Switch>
   </>
  );
}

export default App;
