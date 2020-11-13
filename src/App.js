import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './pages';
import Subjects from './pages/Subjects';
import News from './pages/News';
import Support from './pages/Support';
import MoreInfo from './pages/MoreInfo';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Subjects' component={Subjects} />
        <Route path='/News' component={News} />
        <Route path='/Support' component={Support} />
        <Route path='/MoreInfo' component={MoreInfo} />
      </Switch>
    </Router>
  );
}

export default App;