import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;

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

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      &.actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        button {
          display: flex;
          background: transparent;
          border: 0;

          svg {
            width: 2.4rem;
            height: 2.4rem;

            transition: filter 0.2s;

            &.delete {
              color: var(--red);
            }

            &.edit {
              color: var(--yellow);
            }

            &:hover {
              filter: brightness(0.8);
            }
          }
        }
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  }

  p {
    margin: 3rem 0;
    text-align: center;
    color: var(--text-title);
    font-size: 1.4rem;
  }
`;
