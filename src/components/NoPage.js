import React from 'react';
import { useTheme } from './ThemeContext';

const NoPage = () => {
  const { theme } = useTheme();

  return (
    <div id={theme} className='noPage'>
      <h2>Not found</h2>
    </div>
  );
};

export default NoPage;