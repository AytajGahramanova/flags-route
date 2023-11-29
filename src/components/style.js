import styled from "styled-components";

export const Navbar = styled.nav`
  color: black;
  padding: 0px 60px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 20px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
