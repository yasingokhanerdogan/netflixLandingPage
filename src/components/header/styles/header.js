import styled from "styled-components";
import {Link as ReachRouterLink} from "react-router-dom";

export const HeaderTag = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 5;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1260px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 15px;

  a {
    display: flex;
  }

  @media (max-width: 768px) {
    margin: 0 15px;
  }
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;
  
  @media (max-width: 575px){
    width: 125px;
    height: 30px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  color: white;
  background-color: #e50914;
  border: 0;
  border-radius: 3px;
  display: block;
  font-size: 15px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;