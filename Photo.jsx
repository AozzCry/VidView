import { Row, Col, Card, Image } from "react-bootstrap";
import { usePhoto } from "../components/usePhoto";

export function Photo () {
  const data = usePhoto();
  console.log(data);
  return <Row>
    {data && data.slice(0, 10).map((item) => (
      <Col key={item.id}>
        <Card>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Img as={Image} src={item.url} fluid={true} alt="Card image"/>
            </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
}