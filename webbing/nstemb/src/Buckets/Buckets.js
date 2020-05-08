import React, { Component } from 'react';
import "./Buckets.css";

class Bucket extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h1 class="h1b">buckets  </h1></div>
                <div><h2>mapping</h2></div>
                <div><h2>mL models</h2></div>
            </div>
        );
    }
}

export default Bucket;
