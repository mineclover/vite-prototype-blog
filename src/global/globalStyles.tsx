import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
  box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    color: #0f0f0f
  }
  a {
    text-decoration: none;
    color: #0F0F0F;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
      
  }

  hr {
    box-sizing: border-box;
    height: 2px;
    width: 100%;
    background-color: ${colors.Black};
    border: none;
    margin: 0;
    border: 0;
  }

  @font-face {
  font-family: "잠실체";
  src: local("The Jamsil OTF 1 Thin");
  font-weight: 100;
}
@font-face {
  font-family: "잠실체";
  src: local("The Jamsil OTF 2 Light");
  font-weight: 300;
}
@font-face {
  font-family: "잠실체";
  src: local("The Jamsil OTF 3 Regular");
  font-weight: 400;
}
@font-face {
  font-family: "잠실체";
  src: local("The Jamsil OTF 4 Medium");
  font-weight: 500;
}
@font-face {
  font-family: "잠실체";
  src: local("The Jamsil OTF 5 Bold");
  font-weight: 700;
}
@font-face {
  font-family: "잠실체";
  src: local("The Jamsil OTF 6 ExtraBold");
  font-weight: 800;
}
`;

export default GlobalStyles;
