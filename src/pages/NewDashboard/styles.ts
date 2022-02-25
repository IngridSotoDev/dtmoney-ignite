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

    padding: 120px 80px;

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

      a,
      span {
        font-size: 10px;
      }
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
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
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font: 700 24px "Poppins", sans-serif;
      color: var(--shape);
      line-height: 36px;
      margin: 64px 0 24px;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid #a8a8b3;
        outline: none;
      }

      button {
        margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 12px;
      color: var(--shape);
      margin-top: 16px;

      a {
        color: var(--shape);
      }
    }
  }
`;
