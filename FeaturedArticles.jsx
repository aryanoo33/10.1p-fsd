import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import faker from 'faker';

const articles = Array.from({ length: 4 }, () => ({
  title: faker.lorem.words(),
  image: faker.image.image(),
  description: faker.lorem.sentences(),
}));

const FeaturedArticles = () => {
  return (
    <div>
      <h2>Featured Articles</h2>
      <Card.Group>
        {articles.map((article, index) => (
          <Card key={index}>
            <Image src={article.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default FeaturedArticles;
