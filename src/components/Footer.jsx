import {
  GitHub,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Urbanist;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 29px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Rigth = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lino Cruz</Logo>
        <Desc>
          {" "}
          This website has been built with MERN tech to achieve the look and
          functionality of the front end and the administration and data
          collection of the backend. Made by Lino Cruz.
        </Desc>
        <SocialContainer>
          <SocialIcon color="1da1f2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="0077b5">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="3c3568">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="#ff0000">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Blouses</ListItem>
          <ListItem>Pants</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Rigth>
        <Title>contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> From Trujillo, Peru to all
          the World
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +51 943476578
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          linoeduardocd@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Rigth>
    </Container>
  );
};

export default Footer;
