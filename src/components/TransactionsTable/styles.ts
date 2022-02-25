import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 1rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1.5rem 2.5rem;
      text-align: left;
      line-height: 2.5rem;
    }

    td {
      padding: 2rem 2.5rem;
      border: 0;
      text-align: left;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      button {
        display: flex;
        background: transparent;
        border: 0;

        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;
