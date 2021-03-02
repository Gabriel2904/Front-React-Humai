import "./Header.css";
import { Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Humai
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Cursos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Investigación
          </a>
        </li>
      </ul>
    </Row>
  );
};

export default Header;
