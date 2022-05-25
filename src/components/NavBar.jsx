import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styled.div`
  height: 60px;
  background-color: #dfb527;
  font-family: Urbanist;
  color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Rigth = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: flex-end;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-item: center;
  margin-left: 25px;
  padding: 5px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Input = styled.input`
  border: none;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Girasol</Logo>
        </Center>
        <Rigth>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Rigth>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
