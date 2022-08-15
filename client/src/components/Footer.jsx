import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
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
  padding: 20px;
  ${mobile({ display: "none" })}
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

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
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
          <Logo>Vanilda.</Logo>
          <Desc>
          é uma varejista eletrônica global de moda e estilo de vida comprometida 
          em tornar a beleza da moda acessível a todos. 
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Links Úteis</Title>
          <List>
            <ListItem>Inicio</ListItem>
            <ListItem>Cartão</ListItem>
            <ListItem>Homem </ListItem>
            <ListItem>Mulher</ListItem>
            <ListItem>Accessórios</ListItem>
            <ListItem>Minha conta</ListItem>
            <ListItem>Pedidos</ListItem>
            <ListItem>Melhores</ListItem>
            <ListItem>Termos</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contacto</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Centralidade do kilamba bloco K19 apt 32
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +244 937785806
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> masprog2022@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;