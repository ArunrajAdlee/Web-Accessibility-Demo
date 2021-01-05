import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RouteWrapper = (props) => {
  const {
    pageComponent: PageComponent, layoutComponent: LayoutComponent, ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LayoutComponent matchProps={matchProps} pageComponent={PageComponent} />
      )}
    />
  );
};

export default RouteWrapper;