import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;

const links = [
  {
    url: 'https://github.com/cuongld2',
    icon: SiGithub,
  },
  {
    url: 'https://www.linkedin.com/in/%F0%9F%91%8B%F0%9F%91%8Bcuong-le%F0%9F%92%81%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%92%81%E2%80%8D%E2%99%82%EF%B8%8F-209003b0/',
    icon: SiLinkedin,
  },
];

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Container paddingY="25px">
      <Grid gridGap="30px">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="mailto:ledinhcuong99@gmail.com">Contact</Link>
      </Grid>
    </Container>
    <FooterGrid>
      {links.map(({ url, icon: Icon }) => (
        <Link key={url} target="_blank" opacity={0.7} href={url}>
          <Icon size={22} />
        </Link>
      ))}
    </FooterGrid>
    <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
      © Donald Le 2023 → {new Date().getFullYear()}
    </Text>
  </StyledFooter>
);

export default Footer;
