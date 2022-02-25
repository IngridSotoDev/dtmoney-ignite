import styled from "styled-components";

export const ButtonStyle = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--green);
  color: #FFF;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background: #FFF;
    border: 1px solid var(--green);
    color: var(--green);
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

`