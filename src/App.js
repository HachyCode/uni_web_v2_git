import React, {useState} from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Subjects from './pages/SubjectsPage';
import News from './pages/News';
import UCASCalculator from './pages/UCASCalculator';
import Main from './pages';
import Footer from './Components/Footer';
import SingIn from './pages/SingIn';

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
        <Route path='/UCASCalculator' component={UCASCalculator} />
        <Route path='/SingIn' component={SingIn} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;