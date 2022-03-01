import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: -9rem;
  margin-bottom: 4rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        height: 3rem;
        width: 3rem;

        &.entradas {
          color: var(--green);
        }

        &.saidas {
          color: var(--red);
        }
      }

    }

    strong {
      display: block;
      margin-top: 2rem;
      font-size: 3rem;
      font-weight: 500;
      line-height: 5rem;
    }

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }
  }
`;
