import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 0.5rem;
`;

export const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`;
