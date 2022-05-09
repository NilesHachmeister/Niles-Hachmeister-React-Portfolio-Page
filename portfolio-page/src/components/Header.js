import React from 'react';

function Header() {
  return (
    <div className={`row${props.fluid ? '-fluid' : ''}`}>{props.children}</div>
  );
}

export default Header;
