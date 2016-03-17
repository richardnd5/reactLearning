import React from 'react';
import { Link, IndexLink } from 'react-router';

function Workspace(props) {
  return (
    <div>
      <nav>
        <IndexLink to="/">Home</IndexLink>{' '}
        <Link to="/comment">Comment</Link>{' '}
        <Link to="/todo">Todo</Link> {' '}
        <Link to="/mypage">Just My Page</Link> {' '}
        <Link to="/lifecounter">Life CouNTER</Link>
      </nav>
      {props.children}
    </div>
  )
}

export default Workspace;