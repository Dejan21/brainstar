import React from "react";
import { Card } from "react-bootstrap";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";
import {Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function SecondCard({ title, content, a, img, link, onClick }) {
  return (
    <Card className="cmb-4 card-lift" onClick={onClick}>
      <NavLink to='link'>
      <Card.Img 
        variant="right"
        src={require(`../assets/${img}.jpg`)} style={{height:'100%', width:'100%'}}
      />
      
      <Card.Body>
        <Card.Title className="text-bold">{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illo, deleniti.
        </Card.Text>
        {/* <IoArrowForwardCircleOutline className="arrow-btn" /> */}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </NavLink>
    </Card>
  );
}
export default SecondCard;
