import React from 'react';
import './title.css'

const Title = (props) => {
return <div className="container">Your current score is: {props.score}</div>
};

export default Title;