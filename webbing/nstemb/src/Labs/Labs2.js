import React, { Component } from 'react';
import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import history from './../history';
import './Labs.css'
import v1 from './vectors/v1.svg';
import v2 from './vectors/v2.svg';
import k1 from './vectors/k1.svg';
import k2 from './vectors/k2.svg';
import k3 from './vectors/k3.svg';
import Sumsquarewomb from './rootVec/Sumsquarewomb.svg';
import Sumsquareglass from './rootVec/Sumsquareglass.svg';
import Clustererwomb from './rootVec/Clustererwomb.svg';
import Clustererglass from './rootVec/Clustererglass.svg';
import Camglass from './rootVec/Camglass.svg';
import Cambox2 from './rootVec/Cambox2.svg';
import DataLens from './rootVec/DataLens.svg';
import BeatBox from './rootVec/BeatBox.svg';
import Beatboxglass from './rootVec/Beatboxglass.svg';
import Melody from './rootVec/Melody.svg';

import Camlight from './rootVec/Camlight.svg';




import Sumsquareline2 from './rootVec/Sumsquareline2.svg';


import axis from './vectors/axis.svg';
import CamBoxMon2 from './vectors/CamBoxMon2.svg';
import ClustererMonitor from './vectors/ClustererMonitor.svg';
import Sumsquaresmon from './vectors/Sumsquaresmon.svg';
import Sumsquaresbutton from './vectors/Sumsquaresbutton.svg';
import Slope from './vectors/Slope.svg';
import Sumsquareslope from './vectors/Sumsquareslope.svg';






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
                          transform:'translate(91px,0px)',width:"340px", height:'90px%',
                          padding:'9px',margin:'19px', borderRadius:'9px'}}>
                        <Carousel.Item interval="10000">

                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)',transform:'translate(-36px,-19px)'}}
                            href="/Clusterer">
                            DataLens</Nav.Link>
                            <img src={DataLens} class='clustererbox'></img>
                            <img src={Clustererglass} class='clusterglass'></img>

                            <img src={k1} class='clusters'
                            style={{left:'6px', top:'94px',
                            animationDelay:'1s'}}></img>
                            <img src={k2} class='clusters'

                            style={{left:'37px', top:'81px',
                            animationDelay:'2s'}}></img>
                              <img src={k3} class='clusters'
                            style={{left:'48px', top:'46px',
                            animationDelay:'3s'}}></img>


                          </div>
                          <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)',transform:'translate(-9px,-19px)'}}
                            href="/CamBox">
                            CamBox</Nav.Link>
                            <img class='cambox' src={Cambox2}/>
                            <img class='camglass' src={Camglass}/>
                            <img class='Camlight' src={Camlight}/>




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
                        transform:'translate(91px,59px)',width:"340px", height:'90px%',
                        padding:'27px',margin:'19px', borderRadius:'9px',fontFamily:"Djakarta",
                          fontSize:"19px", letterSpacing:"4px"}}>
                        <Carousel.Item interval="10000">
                        <div class="blocks2">
                          <Nav.Link style={{transform:'translate(-9px,0px)'}}href="/BeatFrame">
                            BeatFrame </Nav.Link>
                            <img src={BeatBox} class='beatbox'></img>
                            <img src={Beatboxglass} class='beatglass'></img>
                            <img src={Melody} class='melody2'></img>

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

            <div style={{position:'relative', top:'190px'}}>
                    <div class="carousel" style={{fontFamily:"Djakarta",
                      fontSize:"19px", letterSpacing:"4px",transform:'translateX(19px)'}}>
                        <h1 class="unitb" style={{width:'180px'}}>
                          <Nav.Link style={{fontFamily:"Djakarta",
                            fontSize:"19px", letterSpacing:"4px",color:'rgb(143, 0, 145)',
                            transform:'translate(5px,89px)'}} href="/DS">
                            art
                          </Nav.Link></h1>
                          <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
                            transform:'translate(91px,89px)',width:"340px", height:'90px%',
                            padding:'27px',margin:'19px', borderRadius:'9px'}}>
                          <Carousel.Item interval="10000">
                            <div class="blocks2">
                              <Nav.Link style={{color:'rgb(143, 0, 145)', transform:'translate(-9px,-19px)'}}href="/Beat3">
                              MelodyBox </Nav.Link>
                              <div class='melodyBox'/>
                              <div class='melodyBoxB'/>
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
