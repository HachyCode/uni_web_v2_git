import React from 'react';
import Home from '../pages/Home';
import SubjectsPage from '../pages/SubjectsPage';
import News from '../pages/News';

import {Row, Col} from 'react-bootstrap'
import ScrollToTop from '../Components/ScrollToTop';


const Main = () => {
  return (
    <div>
        <ScrollToTop/>
        <Row>
          <Col>
            <Home/> {/*Displays home content*/}
          </Col>
        </Row>
        <Row>
          <Col>
            <News/>{/*Displays news content*/}
          </Col>
        </Row>
        <Row>
          <Col>
            <SubjectsPage/>{/*Displays subjects content*/}
          </Col>
        </Row>
    </div>
  );
};

export default Main;
