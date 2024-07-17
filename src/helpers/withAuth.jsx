import React from 'react';

export const withUserAuth = (Component) => {
  return (props) => {
    // User authentication logic
    return <Component {...props} />;
  };
};

export const withAdminAuth = (Component) => {
  return (props) => {
    // Admin authentication logic
    return <Component {...props} />;
  };
};
