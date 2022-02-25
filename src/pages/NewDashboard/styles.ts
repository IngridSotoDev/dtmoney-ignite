import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--background);
    color: var(--text-title);

    padding: 12rem 8rem;

    .illustration {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      justify-content: end;

      img {
        max-width: 700px;
        width: 100%;
      }
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 4.2rem;
      margin-top: 1.6rem;
    }

    p {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-top: 1.6rem;
      color: var(--text-body);
    }
  }

  main {
    flex: 8;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue);
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font: 700 2.4rem "Poppins", sans-serif;
      color: var(--shape);
      line-height: 3.6rem;
      margin: 6.4rem 0 2.4rem;
    }

    form {
      input {
        height: 5rem;
        border-radius: 0.25rem;
        padding: 0 1.6rem;
        background: var(--shape);
        border: 1px solid #a8a8b3;
        outline: none;
      }

      button {
        margin-top: 1.6rem;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 1.4rem;
      color: #f4f0ff;
      margin-top: 1.6rem;

      a {
        color: #e559f9;
      }
    }
  }
`;

export const ButtonCreate = styled.button`
  height: 5rem;
  border-radius: 0.25rem;
  font-weight: 500;
  background: var(--green);
  color: #fff;
  padding: 0 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  img {
    margin-right: 0.8rem;
  }
`