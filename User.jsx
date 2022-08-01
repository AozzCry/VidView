import { Row, Col, Card } from "react-bootstrap";
import { useUser } from "../components/useUser";

export function User () {
  const data = useUser();
  console.log(data);
  return <Row>
    {data && data.map((item) => (
      <Col key={item.id}>
        <Card>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.username}</Card.Text>
            </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
}