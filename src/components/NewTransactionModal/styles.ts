import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.8rem;
    height: 5rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--input-background);

    font-weight: 400;
    font-size: 1.6rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    align-self: end;
    padding: 0 2.4rem;
    margin-top: 2rem;
    height: 5rem;

    background: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;

    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTyleContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E62E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 5rem;
  padding: 0 1.8rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.6rem;
    color: var(--text-title);
  }
`;
