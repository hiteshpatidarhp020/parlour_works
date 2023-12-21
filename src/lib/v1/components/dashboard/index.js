import Header from "../../../design-system/component/dashboard-header";
import PhoneFooter from "../../../design-system/component/phone-footer";
import PhoneHeader from "../../../design-system/component/phone-header";
import Sidebar from "../../../design-system/component/side-bar";
import styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.maindas}>
      <div>
        {/*<Practice />*/}

        <div className={styles.sidebarSection}>
          <Sidebar />
        </div>
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
