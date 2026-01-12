import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d2b;
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const OptionCard = styled.button`
  background: linear-gradient(180deg, #ffffff 0%, #f7fbf9 100%);
  border: 1px solid rgba(15, 60, 40, 0.08);
  border-radius: 20px;
  padding: 26px 22px;
  text-align: left;
  cursor: pointer;

  box-shadow: 0px 12px 30px rgba(15, 60, 40, 0.12);

  transition: all 0.25s ease;

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #24312d;
    margin-bottom: 6px;
  }

  p {
    font-size: 14.5px;
    color: #2b2a29;
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 18px 40px rgba(15, 60, 40, 0.18);
    border-color: rgba(15, 60, 40, 0.18);
  }
`;
