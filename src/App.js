import "./App.css";
import { Container, Row } from "reactstrap";
import Header from "./pages/Header";
import Chat from "./pages/Chat";
function App() {
  return (
    <Container className="main-container border rounded-2 mt-3  bg-white">
      <Header />
      <Chat />
    </Container>
  );
}

export default App;
