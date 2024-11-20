import React from 'react';
import { Image, Container, Header } from 'semantic-ui-react';
import styles from './Banner.module.css'; // Import CSS module
import bannerImg from './path-to-banner-image.jpg'; // You can use picsum or any other image source

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '2em 0' }}>
      <Container textAlign="center">
        <Image src={bannerImg} size="large" centered />
        <Header as="h1">Welcome to Our Homepage</Header>
        <p>Discover the latest articles and tutorials</p>
      </Container>
    </div>
  );
};

export default Banner;
