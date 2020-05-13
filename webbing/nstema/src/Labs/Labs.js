import React, { Component } from 'react';
import { Button, Card, Accordion } from 'react-bootstrap';
import history from './../history';



class Labs extends Component {
    render() {
        return (
          // accordion of booklets
            <div style={{ display: 'flex', justifyContent: 'left', padding: 0 }}>
                <div><h1 class="unit">labs</h1></div>
                <Accordion style={{margin:'0', transform:'translateX(9px)'}}>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          Data Science
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <Button  onClick={() => history.push('/DS')}>data science</Button>

                      </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Pandas</Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          Quantum Computing
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                      </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Qubits</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Primitives</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
            </div>
        );
    }
}

export default Labs;
