import Humai from "./1_FINO.png";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/";
import Footer from "./Components/Footer/";
import { Col, Row } from "react-bootstrap";


function App() {
  return (
    <>
      <Row>
        <Col md={12}>
          <Header />
          <header className="App-header">
            <img src={Humai} className="App-logo" alt="Humai" />
          </header>
        </Col>
        <Footer />
      </Row>
    </>
  );
}

export default App;
