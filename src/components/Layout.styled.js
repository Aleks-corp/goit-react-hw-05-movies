import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  padding: 8px;
  &.active {
    color: orangered;
  }
`;
export const Nav = styled.nav`
  padding: 16px;
  border-bottom: 3px solid #999999;
`;
export const AddWrapper = styled.div`
  margin-left: 26px;
`;
