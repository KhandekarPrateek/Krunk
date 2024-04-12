import "./App.css";
import { Container, Row } from "reactstrap";
import Header from "./pages/Header";
import Chat from "./pages/Chat";
import Tags from "./pages/Tags";
import Bag from "./pages/Bag";
import Filters from "./pages/Filters";
function App() {
  return (
    <Container className="main-container border rounded-2 mt-3  bg-white">
      <Header />
      <Chat />
      <Tags />
      <Bag />
      <Filters />
    </Container>
  );
}

export default App;
