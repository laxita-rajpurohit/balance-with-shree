import styled from "styled-components";

export const Wrapper = styled.section`
  background: white;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;
`;

export const Content = styled.div`
  text-align: center;
      position: absolute;
top: 10%;
left: 12%;

  h1 {
    font-size: 42px;
    margin-bottom: 16px;

  }

  button {
    
    padding: 12px 26px;
    border-radius: 40px;
    border: none;
    background: #2f4f4f;
    color: white;
  }
`;

export const ButtonDiv = styled.div`
display: flex;
gap: 20px;
`;