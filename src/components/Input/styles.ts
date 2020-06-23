import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
  isErroed: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #232119;
  border-radius: 10px;

  border: 2px solid #232119;
  padding: 16px;
  width: 100%;
  color: #636360;

  display: flex;
  flex: 1;

  input {
    color: #f4ede8;
    width:100%;
    border: 0;
    background: transparent;
    &::placeholder {
      color: #636360;
    }
  }
  ${(props) =>
    props.isErroed &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocus &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
    ${(props) =>
      props.isFilled &&
      css`
        color: #ff9000;
      `}


  & + div {
    margin-top: 8px;
  }
  svg {
    margin-right: 16px;
  }

`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin-right: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
