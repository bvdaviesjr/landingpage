import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';



export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: left;
  font-weight: 700;
  padding-left: 70px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaShoppingBasket)`
  padding-top: 15px;
  font-size: 2.5rem;
  transform: translate(-50%, -15%);
`;