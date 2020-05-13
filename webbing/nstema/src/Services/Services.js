import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Services extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>services</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>data science</ListGroup.Item>
                            <ListGroup.Item>urban gardens</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <form>
                    <label>Name:
                    <input type="text" name="name" /></label>
                    <input type="submit" value="Submit" />


                    </form>
                </div>
            </div>
        );
    }
}

export default Services;
