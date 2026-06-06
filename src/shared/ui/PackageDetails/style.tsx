import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #1f3d2b;
`;

export const PackageItem = styled.div`
  padding-left: 4px;
`;

export const PackageTitle = styled.h4`
  font-size: 17px;
  font-weight: 600;
  color: #24312d;
  margin-bottom: 6px;
`;

export const PackageNote = styled.p`
  font-size: 14.5px;
  color: #2b2a29;
  opacity: 0.8;
`;

export const CTAButton = styled.button`
  padding: 16px 36px;
  border-radius: 999px;
  border: none;

  background: linear-gradient(135deg, #7fb6a1 0%, #5f9f86 100%);

  color: #ffffff;
`;
