import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 4rem 1rem 12rem;
  display: flex;
  align-items: flex-start;
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

      svg {
        height: 2rem;
        width: 2rem;
      }
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

    &:hover {
      filter: brightness(0.9);
    }
  }

  .text-id-dashboard {
    width: 100%;
    text-align: right;
    margin-top: 1rem;
    color: var(--shape);

    svg {
      width: 2rem;
      height: 2rem;
    }

    span {
      margin-left: 1rem;
    }
  }
`;
