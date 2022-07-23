import styled from 'styled-components';
import {Link as ReachRouterLink} from 'react-router-dom';

export const FormTag = styled.div`
  position: relative;
  width: 100%;
  min-height: 657px;
  display: flex;
  align-items:center;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.bg ? props.bg : "none" });
  padding: 0 15px;
  
  @media (max-width: 768px){
      padding: 0;
      border-bottom: 1px solid #222;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  max-width: 450px;
  padding: 60px 55px;
  
    @media (max-width: 768px){
        max-width: 100%;
        height: 100vh;
        padding: 120px 30px 60px;
        border-radius: 0;
        background-color: #000000;
    }
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  margin-bottom: 20px;
    outline: none;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 15px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
