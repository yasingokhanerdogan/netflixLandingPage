import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  outline: none;
  font-size: 18px; 
  
  @media (max-width: 992px){
    border-radius: 5px;
  }
  
  @media (max-width: 768px){
    max-width: 100%;
    height: 50px;
  }
`;

export const Break = styled.div`
  width: 100%;
  height: 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 992px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 992px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 575) {
    font-size: 16px;
    line-height: 22px;
  }
`;
