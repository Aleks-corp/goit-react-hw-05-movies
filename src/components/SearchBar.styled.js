import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 26px;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid black;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Icon = styled(HiSearch)`
  width: 28px;
  height: 28px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 68px;
  height: 48px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &.hover {
    opacity: 1;
  }
`;
