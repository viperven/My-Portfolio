import "./Cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//rupesh jha

function Cards({ title, img }) {
  return (
    <Card className="my-card">
      <Card.Img variant="top" src={`../images/${img}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;
