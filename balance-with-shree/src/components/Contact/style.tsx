import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 600px;
  margin: 120px auto;
  background: white;
  border-radius: 20px;
  padding: 64px;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 32px;
    letter-spacing: 0.1em;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 12px 0;
  margin-bottom: 24px;
  font-size: 14px;
  outline: none;
`;

export const Button = styled.button`
  margin-top: 24px;
  background: #2f4f4f;
  color: white;
  border: none;
  padding: 12px 36px;
  border-radius: 32px;
  cursor: pointer;
`;
