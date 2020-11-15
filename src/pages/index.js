import React from 'react';
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import News from '../pages/News';
import {Container, Row, Col} from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Home/> {/*Displays home content*/}
          </Col>
        </Row>
        <Row>
          <Col>
            <Subjects/> {/*Displays subjects content*/}
          </Col>
        </Row>
        <Row>
          <Col>
            <News/> {/*Displays newa content*/}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
