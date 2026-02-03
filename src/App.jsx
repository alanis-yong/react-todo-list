import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import useLocalStorage from 'use-local-storage';
import { TodoContext } from './contexts/TodoContext';

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Todos</Navbar.Brand>
          <Nav>
            <Nav.Link href="/add">Add Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
    <BrowserRouter basename="/react-todo-list">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="add" element={<AddTodo />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  );
}
