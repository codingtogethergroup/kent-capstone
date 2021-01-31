import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap-reboot.css";

const GlobalStyle = createGlobalStyle`
  button, input, select, img,a  {
    outline: none;
    border: none;
  }
`;

export default GlobalStyle;
