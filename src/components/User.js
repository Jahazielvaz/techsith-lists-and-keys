import React from 'react';

const User = (props) => {
  return(
    <li>
      <span>Name: {props.children}. Age: {props.age}</span>
      <button onClick={props.delEvent}>Delete</button>
    </li>
  )
}

export default User;
