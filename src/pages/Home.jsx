import { useContext } from 'react';
import { Badge, Card, Col, Container, Row, Button } from 'react-bootstrap'; 
import { TodoContext } from '../contexts/TodoContext';

export default function Home() {
  const { todos, setTodos } = useContext(TodoContext);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} deleteTodo={deleteTodo} />
      </Row>
    </Container>
  );
}

function CardGroup({ todos, deleteTodo }) {
  return todos.map((todo) => {
    const completed = todo.completed;
    const bg = completed ? 'success' : 'danger';
    return (
      <Col md={4} key={todo.id}>
        <Card className="my-3">
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Badge bg={bg}>{!completed && 'Not'} Completed</Badge>
             <div className="mt-3">
              <Button 
                variant="outline-danger" 
                size="sm" 
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}
