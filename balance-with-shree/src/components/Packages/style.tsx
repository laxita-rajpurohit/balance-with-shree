import styled from "styled-components";

export const Grid = styled.section`
  max-width: 1100px;
  margin: 120px auto;
  background: #2f4f4f;
  border-radius: 20px;
  padding: 64px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  text-align: center;

  h3 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    margin-bottom: 24px;
  }

  button {
    background: #2f4f4f;
    color: white;
    border: none;
    padding: 10px 28px;
    border-radius: 32px;
    cursor: pointer;
  }
`;
