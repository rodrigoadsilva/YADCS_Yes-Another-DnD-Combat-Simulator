import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card, Button, Jumbotron } from 'react-bootstrap'
import CharacterSheet from './CharacterSheet';

function App() {
  return (
    <>
    <style type="text/css">
      {`
      .App-main {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      `}
    </style>
    <div className="App-main">
      <Container>
        <Row>
          <Col>
            <Jumbotron className="mb-1">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <CharacterSheet sheetStyle='Player'/>
          </Col>
          <Col className="h-100 text-center">
            <Card>
                <Card.Header>Control panel</Card.Header>
                <Card.Body>
                <Button variant="primary">Submit</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col>
            <CharacterSheet sheetStyle='Enemy'/>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
              <Card.Body>
                  <Card.Title>Battle log</Card.Title>
                  <hr/>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>
              </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default App;
