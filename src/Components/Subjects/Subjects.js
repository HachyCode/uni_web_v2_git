import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import {
  SubjectsContainer,
  SubjectsH1,
} from '../Subjects/SubjectsElements';

import ArtsCards from '../SubjectCards/ArtsCards';
import BiologyCards from '../SubjectCards/BiologyCards';
import BussinesCards from '../SubjectCards/bussinesCards';
import CommunicationCards from '../SubjectCards/CommunicationCards';
import ComputingCards from '../SubjectCards/ComputingCards';
import ConstructionCards from '../SubjectCards/ConstructionCards';
import CriminologyCards from '../SubjectCards/CriminologyCards';
import EducationCards from '../SubjectCards/EducationCards';
import EngineeringCards from '../SubjectCards/Engineeringcards';
import LiteratureCards from '../SubjectCards/LiteratureCards';
import PsychologyCards from '../SubjectCards/PsychologyCards';
import SportCards from '../SubjectCards/SportCards';


const Subjects = () => {
  return (
    <>

      <Accordion defaultActiveKey="0">

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <SubjectsH1>Arts</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0" >
            <Card.Body> <ArtsCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <SubjectsH1>Biology</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body> <BiologyCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <SubjectsH1>Bussines</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body> <BussinesCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              <SubjectsH1>Communication</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body> <CommunicationCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              <SubjectsH1>Computing</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body> <ComputingCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              <SubjectsH1>Construction</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body> <ConstructionCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              <SubjectsH1>Criminology</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body> <CriminologyCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              <SubjectsH1>Education</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body> <EducationCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="8">
              <SubjectsH1>Engineering</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body> <EngineeringCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
              <SubjectsH1>Literature</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body> <LiteratureCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="10">
              <SubjectsH1>Psychology</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body> <PsychologyCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="10">
              <SubjectsH1>Sport</SubjectsH1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body> <SportCards /> </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>

      
      
      
      
      
      
      
      
      
      
    </>
  );
};

export default Subjects;
