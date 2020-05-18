import React, { Component } from "react";
import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import history from './../history';
import "./Wiki.css";
import v1 from './vectors/v1.svg';
import v2 from './vectors/v2.svg';


export default class Wiki extends Component {
  render() {
    return (
      <div class="Thread" style={{  borderRadius:'9px',display: 'flex', justifyContent: 'left', transform:'translateX(11px)',
      padding: '0px',textDecoration:'none',backgroundColor:'', opacity:'49%'}}>


          <Accordion style={{margin:'0', transform:''}}>

            <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>

              <Card.Header style={{display:'inline-block', backgroundColor:'rgba(0,0,0,0.0)',
                padding:'0px',textDecoration:'none'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0"
                 style={{fontSize: '27px', margin:'0px',textDecoration:'none',
                 color:'rgb(143, 0, 145)'}}>
                 Data Science</Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Accordion style={{margin:'0', transform:''}}>

                  <Card style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                  border:'none', textDecoration:'none'}}>

                    <Card.Header style={{flow:'left', backgroundColor:'rgba(145, 255, 0,0.79)',
                    padding:'5px',margin:'9px',textDecoration:'none'}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0"
                       style={{display:'inline-block',fontSize: '19px', margin:'0px',
                       textDecoration:'none',color:'rgb(143, 0, 145)'}}>
                       How to build DataFrame
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body class='wikicell' style={{width:'auto',backgroundColor:'rgba(145, 255, 0,0.79)',
                    color:'rgb(143, 0, 145)', float:'right',padding:'9px'}}>
                        pd.DataFrame()
                        <br/><br/>
                        <Button onDoubleClick={() => history.push('/DataFrames')}
                        style={{fontSize:'12px' ,margin:'9px',maxWidth: '60px',
                        whiteSpace: 'initial',transform:'translateX(-19px)',
                        backgroundColor:'rgba(145, 255, 0,0.0)',color:'rgb(143, 0, 145)'}}>
                          df lab
                        </Button>
                      </Card.Body>
                    </Accordion.Collapse>

                    <br/><br/>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body class='wikicell' style={{width:'auto',backgroundColor:'rgba(145, 255, 0,0.79)',
                    color:'rgb(143, 0, 145)', float:'right',padding:'9px'}}>
                        pd.read_csv()
                      </Card.Body>
                    </Accordion.Collapse>

                  </Card>
                </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion style={{margin:'0', transform:''}}>
            <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>

              <Card.Header style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                padding:'0px',textDecoration:'none'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0"
                 style={{fontSize: '27px', margin:'0px',textDecoration:'none',
                 color:'rgb(143, 0, 145)'}}>
                 Linear Algebra</Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Accordion style={{margin:'0', transform:''}}>

                  <Card style={{display:'inline-block',backgroundColor:'rgba(0,0,0,0.0)',
                  border:'none', textDecoration:'none'}}>

                    <Card.Header style={{flow:'left', backgroundColor:'rgba(145, 255, 0,0.79)',
                    padding:'5px',margin:'9px',textDecoration:'none'}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0"
                       style={{display:'inline-block',fontSize: '19px', margin:'0px',
                       textDecoration:'none',color:'rgb(143, 0, 145)'}}>
                       What is identity matrix?
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body class='wikicell' style={{width:'auto',backgroundColor:'rgba(145, 255, 0,0.79)',
                    color:'rgb(143, 0, 145)', float:'right',padding:'9px'}}>
                    <math>
                    <mfenced>
          <mtable>
          <mtr>
          <mtd> <mn>1</mn> </mtd>
          <mtd> <mn>0</mn> </mtd>
          <mtd> <mn>0</mn> </mtd>
          </mtr>
          <mtr>
          <mtd> <mn>0</mn> </mtd>
          <mtd> <mn>1</mn> </mtd>
          <mtd> <mn>0</mn> </mtd>
          </mtr>
          <mtr>
          <mtd> <mn>0</mn> </mtd>
          <mtd> <mn>0</mn> </mtd>
          <mtd> <mn>1</mn> </mtd>
          </mtr>
          </mtable>
          </mfenced>
                    </math>
                      </Card.Body>
                    </Accordion.Collapse>

                    <br/><br/>


                  </Card>
                </Accordion>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

      </div>

    );
  }
}
