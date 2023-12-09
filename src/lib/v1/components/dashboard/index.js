import Header from "../../../design-system/component/dashboard-header";
import PhoneFooter from "../../../design-system/component/phone-footer";
import PhoneHeader from "../../../design-system/component/phone-header";
import Sidebar from "../../../design-system/component/side-bar";
import styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <div>
      <div>
        {/*<Practice />*/}
        <Sidebar />
        <div className={styles.sidebarnone}>
          <Header />
        </div>
        <div className={styles.header}>
          <PhoneHeader />
          <PhoneFooter />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
