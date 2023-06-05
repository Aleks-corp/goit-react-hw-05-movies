import { Outlet } from 'react-router-dom';
import { Container, Link, Nav } from './Layout.styled';

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
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
