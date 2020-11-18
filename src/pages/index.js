import React from 'react';
import Home from '../pages/Home';
import SubjectsPage from '../pages/SubjectsPage';
import News from '../pages/News';
import {Row, Col} from 'react-bootstrap'

const Main = () => {
  return (
    <div>
        <Row>
          <Col>
            <Home/> {/*Displays home content*/}
          </Col>
        </Row>
        <Row>
          <Col>
            <SubjectsPage/> {/*Displays subjects content*/}
          </Col>
        </Row>
        <Row>
          <Col>
            <News/> {/*Displays newa content*/}
          </Col>
        </Row>
    </div>
  );
};

export default Main;
