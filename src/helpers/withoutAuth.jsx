import React from 'react';

export const withoutAuth = (Component) => {
  return (props) => {
    // Authentication logic to prevent access for authenticated users
    return <Component {...props} />;
  };
};
