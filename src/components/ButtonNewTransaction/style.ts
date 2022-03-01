import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.6rem;
  background: transparent;
  color: var(--blue-light);
  border: 0;
  border-radius: 0.25rem;
  height: 5rem;
  display: flex;
  align-items: center;

  transition: filter 0.2s;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(1.5);
  }
`;
