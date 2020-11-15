import React, {useState} from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';


import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './pages';
import Subjects from './pages/Subjects';
import News from './pages/News';
import Support from './pages/Support';
import MoreInfo from './pages/MoreInfo';
import Main from './pages';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Sidebar isOpen = {isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/Subjects' component={Subjects} />
        <Route path='/News' component={News} />
        <Route path='/Support' component={Support} />
        <Route path='/MoreInfo' component={MoreInfo} />
      </Switch>
    </Router>
  );
}

export default App;