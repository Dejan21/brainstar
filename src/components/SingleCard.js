import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';


class SingleCard extends Component {
  state = {
    img: [],
    post: [],
  };

  render() {
    const { title, a, link, img, post } = this.state;

    return (
      <Card className="cmb-4 card-lift">
        <Card.Img variant="right" src={require("../assets/edukacija1.jpg")} />

        <Card.Body>
          <Card.Title>Едукација</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>   
    );
  }
}

export default SingleCard;
