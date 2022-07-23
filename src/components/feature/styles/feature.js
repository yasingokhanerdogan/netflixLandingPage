import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 657px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 8px solid #222;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.bg});
`;

export const Inner = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 992px) {
    padding: 0 30px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
