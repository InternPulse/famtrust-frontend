import React from 'react';
import Button from './Button';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar content */}
      <Button buttonType={inverted}>Hear</Button>
    </div>
  );
};

export default Sidebar;
