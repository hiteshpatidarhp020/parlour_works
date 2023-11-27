import { Col, Row } from "react-bootstrap";
import Practice from "../../src/lib/design-system/component/practice";
import "bootstrap/dist/css/bootstrap.min.css";
import PwText from "../../src/lib/design-system/component/pw-text";
import PwSpace from "../../src/lib/design-system/component/pw-space";
import { withTranslation } from "react-i18next";
import Sidebar from "../../src/lib/design-system/component/side-bar";

const Login = ({ t }) => {
  return (
    <div>
      <h1>{t("title")}</h1>
      <Practice />
      <Sidebar />
    </div>
  );
};
export default withTranslation("login")(Login);
