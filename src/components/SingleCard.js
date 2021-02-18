import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


class SingleCard extends Component {
  state = {
    img: [],
    post: [],
  };

  render() {
    const { title, link, img, post } = this.state;

    return (
      <Card className="mb-4 card-lift">
        <Card.Img variant="top" src={require('../../assets/img/edukacija1.jpg')}

/>

        <Card.Body>
          <Card.Title>Едукација</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleCard;
