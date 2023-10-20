import { NavLink, Outlet } from 'react-router-dom';
// import css from './Layout.module.css';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/content">Content</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
