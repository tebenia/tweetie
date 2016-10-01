import React from 'react';
import AppNavbar from './appNavbar';

const MainLayout = ({children}) => (
  <div className="app-root">
    <header>
      <AppNavbar/>
    </header>
    {children}
  </div>
);

MainLayout.PropTypes = {
  children: React.PropTypes.object
}

export default MainLayout;
