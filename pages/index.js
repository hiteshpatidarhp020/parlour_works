import "bootstrap/dist/css/bootstrap.min.css";
import Practice from "../src/lib/design-system/component/practice";
import Sidebar from "../src/lib/design-system/component/side-bar";
import Header from "../src/lib/design-system/component/dashboard-header";
import PhoneFooter from "../src/lib/design-system/component/phone-footer";
import styles from "./index.module.css";
import PhoneHeader from "../src/lib/design-system/component/phone-header";

// import "../src/App.css";
const Home = () => {
  return (
    <div>
      {/*<Practice />*/}
      <div className={styles.sidebarnone}>
        <Sidebar />
        <Header />
      </div>
      <div className={styles.header}></div>
      {/*<PhoneFooter />
<PhoneHeader />*/}
    </div>
  );
};
export default Home;
