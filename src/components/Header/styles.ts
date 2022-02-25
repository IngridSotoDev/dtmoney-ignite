import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1.6rem;
    background: var(--blue-light);
    color: #fff;
    border: 0;
    padding: 0 3.2rem;
    border-radius: 0.25rem;
    height: 5rem;

    transition: filter 0.2s;

    &.copy-dashboard-id {
      display: flex;
      padding: 0;
      height: 4rem;
      
      div {
        background: var(--green);
        padding: 0 1rem;
        border-radius: 0.25rem 0 0 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        display: block;
        align-self: center;
        flex: 1;
        width: 24rem;
        margin-left: 1rem;
        font-size: 1.4rem;
        font-weight: 500;
      }
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
