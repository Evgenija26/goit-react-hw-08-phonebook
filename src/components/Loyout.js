import { Outlet } from 'react-router-dom';
import { MenuAppBar } from './SearchBar/SearchBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <MenuAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
