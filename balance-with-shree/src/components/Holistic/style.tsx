import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1100px;
  margin: 120px auto;
  background: #3f5f58;
  border-radius: 20px;
  padding: 64px;
  text-align: center;
  color: white;

  h2 {
    font-size: 26px;
    letter-spacing: 0.1em;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    gap: 24px;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Card = styled.div`
  background: white;
  color: #2f4f4f;
  padding: 24px 32px;
  border-radius: 12px;
  font-size: 14px;
  min-width: 180px;
`;
