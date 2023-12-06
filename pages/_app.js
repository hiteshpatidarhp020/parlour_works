// _app.js

import "../globels.scss"; // Correct the path based on your project structure and location of globals.scss
import "../src/lib/design-system/component/pw-dropdown/pw-dropdown.module.css";
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
