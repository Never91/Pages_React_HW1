import React from 'react';
import ReactDOM from 'react-dom';



const li_1 = React.createElement("li", {}, "Facebook")
const li_2 = React.createElement("li", {}, "Google")
const li_3 = React.createElement("li", {}, "Yahoo")
const li_4 = React.createElement("li", {}, "NASA")

const li_conteiner = React.createElement("ul", {}, li_1, li_2, li_3, li_4)

const nav = React.createElement("nav", {}, li_conteiner)



ReactDOM.render(navigation, document.getElementById('root')
);



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
