import { Table } from "react-bootstrap";
import styles from "./table.module.css";

const data = [
  {
    staffName: "Hitesh Patidar",
    itemCount: "2",
    serviceAmount: "350",
    productAmount: "350",
    membership: "350",
    total: "350",
  },
  {
    staffName: "Hitesh Patidar",
    itemCount: "2",
    serviceAmount: "350",
    productAmount: "350",
    membership: "350",
    total: "350",
  },
  {
    staffName: "Hitesh Patidar",
    itemCount: "2",
    serviceAmount: "350",
    productAmount: "350",
    membership: "350",
    // total: "350",
  },
];

const InvoiceTable = () => {
  return (
    <div className={styles.tableMain}>
      <Table className={styles.trtable} striped hover>
        <thead>
          <tr>
            <th className={styles.headingStart}>Staff Name</th>
            <th>Item Count</th>
            <th>Service Amount</th>
            <th>Product Amount</th>
            <th>Membership</th>
            <th className={styles.headingEnd}>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={styles.tablebody}>
              <td className={styles.headingStart}>{row.staffName}</td>
              <td>{row.itemCount}</td>
              <td>₹ {row.serviceAmount}</td>
              <td>{row.productAmount}</td>
              <td>{row.membership}</td>
              <td className={styles.headingEnd}>₹ {row.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InvoiceTable;
