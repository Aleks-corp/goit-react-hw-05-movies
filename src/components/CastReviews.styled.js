import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 10px;
`;

export const LiCast = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-top: 10px;
  border: 1px solid #999999;
  border-radius: 5px;
`;

export const LiReview = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 10px;
  border: 1px solid #999999;
  border-radius: 5px;
`;

export const Title = styled.p`
  text-align: center;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
