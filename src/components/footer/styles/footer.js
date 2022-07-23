import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 50px 15px;
  margin: 0 auto;
  max-width: 992px;
  flex-direction: column;

  @media (max-width: 992px) {
    padding: 50px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  
  @media (max-width: 575px) {
    grid-template-columns: repeat(auto-fill, minmax(400, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin: 40px 0;
`;

export const Break = styled.div`
  width: 100%;
  height: 30px;
`;
