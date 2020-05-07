
import React from 'react';
import './App.css';
import ReactDOM from 'react';
import game from './vectors/game.svg';
import v1 from './vectors/v1.svg';
import v2 from './vectors/v2.svg';
import flower4 from './vectors/flower4.svg';
import unity from './vectors/unity.svg';
import box from './vectors/box.svg';
import map1 from './vectors/map1.svg';
// <img class="map1" src={map1}/>

function DataStructures() {

  const section = 'lists';

  return (
    <div>
    <section class = "section">Allah'u'abha</section>
      <div>
        <div >
        <div></div>
          <div class = "listBox1"></div>
          <div class = "indexBox1"></div>
          <div class = "boxIndex1"></div>
      </div>
    </div>
    <div>
      <div >
        <div class = "listBoxes1"></div>
        <div class = "listBoxes2"></div>
        <div class = "listBoxes3"></div>
      </div>
    </div>
    <div>
      <div >
        <div class = "listBoxes1b"></div>
        <div class = "listBoxes2b"></div>
        <div class = "listBoxes3b"></div>
        <div class = "boxIndex1b"></div>
        <div class = "indexValue"></div>
      </div>
    </div>
    <div>
      <div >
        <img class="flower2" src={v1}/>
        <img class="flower3" src={v2}/>
        <img class="flower4" src={flower4}/>

      </div>
      <div class="metabox">
        <img class="flower5" src={flower4}/>
      </div>
      <div >
        <img class="box" src={v2}/>

      </div>

    </div>

  </div>
  );
}



export default DataStructures;
