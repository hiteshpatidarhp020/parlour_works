// _app.js

import "../globels.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // Correct the path based on your project structure and location of globals.scss
import "../src/lib/design-system/component/pw-dropdown/pw-dropdown.module.css";
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
