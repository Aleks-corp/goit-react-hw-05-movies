import { Outlet } from 'react-router-dom';
import { Container, Link, Nav } from './Layout.styled';
import { Suspense } from 'react';
import Loader from './Loader';

const Layout = () => {
  return (
    <>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
