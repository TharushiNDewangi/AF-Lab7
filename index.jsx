import React from 'react';
//render is the method that you use the nsert react to html
//create connection
import {render} from 'react-dom';
import App from "./app";

//push some react to dom element
//this is jsx

render(<App/>, document.getElementById('app'));