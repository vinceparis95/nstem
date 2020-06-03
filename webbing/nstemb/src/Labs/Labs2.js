import React, { Component } from 'react';
import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import history from './../history';
import './Labs.css'
import v1 from './vectors/v1.svg';
import v2 from './vectors/v2.svg';
import dfword2 from './vectors/dfword2.svg'



class Labs2 extends Component {
    render() {
        return (
          // accordion of booklets
          <div class="arcade" style={{borderWidth: '27px',opacity:'60%'}} >
          <div style={{position:'relative'}}>
                  <div class="carousel" style={{fontFamily:"Djakarta",
                    fontSize:"19px", letterSpacing:"4px",transform:'translateX(19px)'}}>
                      <h1 class="unitb" style={{width:'180px'}}>
                        <Nav.Link style={{fontFamily:"Djakarta",
                          fontSize:"19px", letterSpacing:"4px",color:'rgb(143, 0, 145)',transform:'translateX(5px)'}} href="/DS">
                          mL
                        </Nav.Link></h1>
                        <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
                          transform:'translate(144px,10px)',width:"340px", height:'90px%',
                          padding:'27px',margin:'19px', borderRadius:'9px'}}>
                        <Carousel.Item interval="10000">
                        <div class="blocks2">
                          <Nav.Link style={{transform:'translate(-9px,0px)'}}href="/DataFrames">
                            SumSquares </Nav.Link>
                            <div class='df'/>
                        </div>
                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)',transform:'translate(-9px,-19px)'}}href="/Beat3">
                            Clustering </Nav.Link>
                            <div class='clusterBoxA' >
                              <div class='boxCluster'style={{animationDelay:'.26s',backgroundColor:'rgba(184, 78, 249, 0.27)',left:'43px', top:'4px'}}/>
                                <div class='boxCluster'style={{left:'59px', top:'12px'}}/>
                                <div class='boxCluster'style={{backgroundColor:'rgba(14, 78, 249, 0.19)',animationDelay:'.36s',left:'27px', top:'19px'}}/>
                            </div>
                          </div>


                        </Carousel.Item>
                        <Carousel.Item interval="10000">
                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
                            data structures </Nav.Link>
                            <img class='v2' src={v2}/>
                            <img class='v2' src={v2}/>
                          </div>
                        </Carousel.Item >
                        <Carousel.Item interval="10000">
                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
                            functions </Nav.Link>
                          <img class='v2b' src={v2}/>
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div>

                    <div class="carousel" style={{position:'relative', left:'0px',
                    top:'90px', transform:'translateX(19px)'}}>
                      <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
                        transform:'translate(144px,10px)',width:"340px", height:'90px%',
                        padding:'27px',margin:'19px', borderRadius:'9px',fontFamily:"Djakarta",
                          fontSize:"19px", letterSpacing:"4px"}}>
                        <Carousel.Item interval="10000">
                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                            AniMaps </Nav.Link>
                            <img class='v2b' src={v2}/>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item interval="10000">
                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                            mutating </Nav.Link>
                            <img class='v2' src={v2}/>
                            <img class='v2' src={v2}/>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item interval="10000">
                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                            mushing </Nav.Link>
                            <img class='v2b' src={v2}/>
                          </div>
                        </Carousel.Item>
                      </Carousel>
                    </div >
                  </div>

            <div style={{position:'relative', top:'162px'}}>
                    <div class="carousel" style={{fontFamily:"Djakarta",
                      fontSize:"19px", letterSpacing:"4px",transform:'translateX(19px)'}}>
                        <h1 class="unitb" style={{width:'180px'}}>
                          <Nav.Link style={{fontFamily:"Djakarta",
                            fontSize:"19px", letterSpacing:"4px",color:'rgb(143, 0, 145)',transform:'translateX(5px)'}} href="/DS">
                            art
                          </Nav.Link></h1>
                          <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
                            transform:'translate(144px,10px)',width:"340px", height:'90px%',
                            padding:'27px',margin:'19px', borderRadius:'9px'}}>
                          <Carousel.Item interval="10000">
                            <div class="blocks2">
                              <Nav.Link style={{color:'rgb(143, 0, 145)', transform:'translate(-9px,-19px)'}}href="/Beat3">
                              MelodyBox </Nav.Link>
                              <div class='melodyBox'/>
                              <div class='melodyBoxB'/>
                            </div>
                          <div class="blocks2">
                            <Nav.Link style={{transform:'translate(-9px,0px)'}}href="/DataFrames">
                              BeatFrame </Nav.Link>
                              <div class='df'/>
                          </div>
                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/PaintFrame">
                        <span style={{color:"rgba(184, 18, 57, 0.45)"}}>P</span>
                        <span style={{color:"rgba(145, 10, 19,0.6)"}}>a</span>
                        <span style={{color:"rgba(109, 25, 90,0.6)"}}>i</span>
                        <span style={{color:"rgba(145, 13, 1,0.45)"}}>n</span>
                        <span style={{color:"rgba(100, 10, 10,0.45)"}}>t</span>
                        <span style={{color:"rgba(184, 18, 57, 0.45)"}}>F</span>
                        <span style={{color:"rgba(145, 10, 19,0.6)"}}>r</span>
                        <span style={{color:"rgba(145, 63, 90,0.6)"}}>a</span>
                        <span style={{color:"rgba(145, 13, 1,0.6)"}}>m</span>
                              <span style={{color:"rgba(197, 110, 255, 0.72)"}}>e</span></Nav.Link>
                              <div class='PaintFrame'/>
                              </div>
                          </Carousel.Item>
                          <Carousel.Item interval="10000">
                            <div class="blocks2">
                              <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
                              data structures </Nav.Link>
                              <img class='v2' src={v2}/>
                              <img class='v2' src={v2}/>
                            </div>
                          </Carousel.Item >
                          <Carousel.Item interval="10000">
                            <div class="blocks2">
                              <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
                              functions </Nav.Link>
                            <img class='v2b' src={v2}/>
                            </div>
                          </Carousel.Item>
                        </Carousel>
                      </div>

                      <div class="carousel" style={{position:'relative', left:'0px',
                      top:'90px', transform:'translateX(19px)'}}>
                        <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
                          transform:'translate(144px,10px)',width:"340px", height:'90px%',
                          padding:'27px',margin:'19px', borderRadius:'9px',fontFamily:"Djakarta",
                            fontSize:"19px", letterSpacing:"4px"}}>
                          <Carousel.Item interval="10000">
                            <div class="blocks2">
                              <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                              AniMaps </Nav.Link>
                              <img class='v2b' src={v2}/>
                            </div>
                          </Carousel.Item>
                          <Carousel.Item interval="10000">
                            <div class="blocks2">
                              <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                              mutating </Nav.Link>
                              <img class='v2' src={v2}/>
                              <img class='v2' src={v2}/>
                            </div>
                          </Carousel.Item>
                          <Carousel.Item interval="10000">
                            <div class="blocks2">
                              <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                              mushing </Nav.Link>
                              <img class='v2b' src={v2}/>
                            </div>
                          </Carousel.Item>
                        </Carousel>
                      </div >
                    </div>

                    <div style={{position:'relative', top:'320px'}}>
                            <div class="carousel" style={{fontFamily:"Djakarta",
                              fontSize:"19px", letterSpacing:"4px",transform:'translateX(19px)'}}>
                                <h1 class="unitb" style={{width:'180px'}}>
                                  <Nav.Link style={{fontFamily:"Djakarta",
                                    fontSize:"19px", letterSpacing:"4px",color:'rgb(143, 0, 145)',transform:'translateX(5px)'}} href="/DS">
                                    quantum
                                  </Nav.Link></h1>
                                  <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
                                    transform:'translate(144px,10px)',width:"340px", height:'90px',
                                    padding:'27px',margin:'19px', borderRadius:'9px'}}>
                                  <Carousel.Item interval="10000">
                                    <div class="blocks2">
                                      <Nav.Link style={{color:'rgb(143, 0, 145)', marginLeft:'0px',transform:'translate(-9px,-19px)'}}
                                      href="/Quanta">
                                      Quanta </Nav.Link>
                                      <div class='melodyBox'/>
                                      <div class='melodyBoxB'/>
                                    </div>
                                    <div class="blocks2" >
                                      <Nav.Link href="/DataFrames" style={{marginLeft:'19px'}}>
                                      Primitives </Nav.Link>
                                        <div class='df' style={{marginLeft:'36px'}}/></div>
                                    <div class="blocks2" style={{marginLeft:'45px'}}>
                                      <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/DataFrames">
                                      <span style={{color:"rgba(103, 0, 145,0.6)"}}>P</span>
                                      <span style={{color:"rgba(145, 10, 19,0.6)"}}>a</span>
                                      <span style={{color:"rgba(109, 25, 90,0.6)"}}>i</span>
                                      <span style={{color:"rgba(145, 13, 1,0.45)"}}>n</span>
                                      <span style={{color:"rgba(100, 10, 10,0.6)"}}>t</span>
                                      <span style={{color:"rgba(184, 18, 57, 0.45)"}}>F</span>
                                      <span style={{color:"rgba(145, 13, 1,0.36)"}}>r</span>
                                      <span style={{color:"rgba(145, 63, 90,0.6)"}}>a</span>
                                      <span style={{color:"rgba(145, 13, 1,0.6)"}}>m</span>
                                      <span style={{color:"rgba(197, 11, 255, 0.6)"}}>e</span></Nav.Link>
                                      <div class='PaintFrame'/>
                                    </div>
                                  </Carousel.Item>
                                  <Carousel.Item interval="10000">
                                    <div class="blocks2">
                                      <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
                                      data structures </Nav.Link>
                                      <img class='v2' src={v2}/>
                                      <img class='v2' src={v2}/>
                                    </div>
                                  </Carousel.Item >
                                  <Carousel.Item interval="10000">
                                    <div class="blocks2">
                                      <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
                                      functions </Nav.Link>
                                    <img class='v2b' src={v2}/>
                                    </div>
                                  </Carousel.Item>
                                </Carousel>
                              </div>

                              <div class="carousel" style={{position:'relative', left:'0px',
                              top:'90px', transform:'translateX(19px)'}}>
                                <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
                                  transform:'translate(144px,10px)',width:"340px", height:'90px%',
                                  padding:'27px',margin:'19px', borderRadius:'9px'}}>
                                  <Carousel.Item interval="10000">
                                    <div class="blocks2">
                                      <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                                      plotting </Nav.Link>
                                      <img class='v2b' src={v2}/>
                                    </div>
                                  </Carousel.Item>
                                  <Carousel.Item interval="10000">
                                    <div class="blocks2">
                                      <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                                      mutating </Nav.Link>
                                      <img class='v2' src={v2}/>
                                      <img class='v2' src={v2}/>
                                    </div>
                                  </Carousel.Item>
                                  <Carousel.Item interval="10000">
                                  <div class="blocks2">
                                  <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
                                  mushing </Nav.Link>
                                  <img class='v2b' src={v2}/>
                                  </div>
                                  </Carousel.Item>
                                </Carousel>
                              </div >
                            </div>
                          </div>

        );
    }
}

export default Labs2;
