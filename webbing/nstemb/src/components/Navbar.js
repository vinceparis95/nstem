import React from 'react';
import './Navbar.css';
import history from './../history';
import { Navbar, Nav, Form, Card,Button, Accordion } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
      <div>

        <Navbar className='root' style={{backgroundColor:'rgba(145, 255, 0,0.79)', opacity:'49%',
                      fontFamily:'Djakarta', letterSpacing:'4px', fontSize:'19px', width:'145px',
                      margin:'19px', borderRadius:'14px', fontWeight:'bold',
                    color:'white'
                  }}>
          <Navbar.Brand style={{fontSize:'25px', color:'rgb(143, 0, 145)'}} href="/Labs2">rootpath</Navbar.Brand>
        </Navbar>

      </div>
    )
}

export default withRouter(Navigation);
