import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
//projectTest
import Pt from "./projectTest/Pt";
//project1
import P1 from "./project1/P1";
//project2
import P2 from "./project2/P2";


//projectTest
ReactDOM.render(<Pt />,document.getElementById("projectTest"));

//project1
ReactDOM.render(<P1 />, document.getElementById("project1"));

//project2
ReactDOM.render(<P2 />,document.getElementById("project2"))