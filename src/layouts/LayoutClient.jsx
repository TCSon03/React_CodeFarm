// import React from 'react'
import HeaderClient from '../components/HeaderClient';
import { Outlet } from 'react-router-dom';

const LayoutClient = () => {
  return (
    <div>
      <HeaderClient />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutClient