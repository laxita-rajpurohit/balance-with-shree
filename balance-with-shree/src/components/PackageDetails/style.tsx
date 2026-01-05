import styled from "styled-components";

export const Wrapper = styled.div`
  //   text-align: center;
`;

export const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 14px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d32;
  margin-bottom: 28px;
`;

export const BulletList = styled.ul`
  //   max-width: 480px;
  margin: 0 auto 32px;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 26px;
    margin-bottom: 14px;
    color: #2b2a29;
    line-height: 1.6;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #7fb6a1;
      font-size: 22px;
      line-height: 1;
    }
  }
`;

export const CTAButton = styled.button`
  padding: 16px 36px;
  border-radius: 999px;
  border: none;

  background: linear-gradient(135deg, #7fb6a1 0%, #5f9f86 100%);

  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.4px;

  cursor: pointer;
  transition: all 0.25s ease;

  box-shadow: 0px 10px 24px rgba(95, 159, 134, 0.35);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 14px 30px rgba(95, 159, 134, 0.45);
  }
`;
