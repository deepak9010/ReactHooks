// HOC: withLoading.js
// This is a Higher-Order Component (HOC) — a function that takes another component (WrappedComponent) and returns a new component (WithLoadingComponent) that adds some behavior (in this case: loading logic).
// Imagine you have many components that fetch data. Instead of writing if (loading) logic inside each component, you can:
// Write it once in a reusable HOC (withLoading).
// Wrap any component with it to get that behavior.

import React from 'react';

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
