import styles from "./Table.module.css";
import triangleIcon from "../images/Triangle-Icon.svg";
import gray from "../images/grayDot.svg";
import green from "../images/greenDot.svg";

function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.roundL}>
            <img src={triangleIcon} alt="triangleIcon" />
          </th>
          <th></th>
          <th>Transaction ID</th>
          <th>Order amount</th>
          <th>Transaction fees</th>
          <th className={styles.roundR}>Total</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td></td>
          <td className={styles.status}>
            <div className={styles.grayDot}></div>
            Processing
          </td>
          <td>131634495747</td>
          <td>₹10,125.00</td>
          <td>₹1,125.00</td>
          <td>₹9,312</td>
        </tr>
        <tr>
          <td></td>
          <td className={styles.status}>
            <div className={styles.greenDot}></div>
            Successful
          </td>
          <td>131634495747</td>
          <td>₹10,125.00</td>
          <td>₹1,125.00</td>
          <td>₹9,312</td>
        </tr>
        <tr>
          <td></td>
          <td className={styles.status}>
            <div className={styles.greenDot}></div>
            Successful
          </td>
          <td>131634495747</td>
          <td>₹10,125.00</td>
          <td>₹1,125.00</td>
          <td>₹9,312</td>
        </tr>
        <tr>
          <td></td>
          <td className={styles.status}>
            <div className={styles.greenDot}></div>
            Successful
          </td>
          <td>131634495747</td>
          <td>₹10,125.00</td>
          <td>₹1,125.00</td>
          <td>₹9,312</td>
        </tr>
        <tr>
          <td></td>
          <td className={styles.status}>
            <div className={styles.greenDot}></div>
            Successful
          </td>
          <td>131634495747</td>
          <td>₹10,125.00</td>
          <td>₹1,125.00</td>
          <td>₹9,312</td>
        </tr>
        <tr>
          <td></td>
          <td className={styles.status}>
            <div className={styles.greenDot}></div>
            Successful
          </td>
          <td>131634495747</td>
          <td>₹10,125.00</td>
          <td>₹1,125.00</td>
          <td>₹9,312</td>
        </tr>
        <tr>
          <td></td>
          <td className={styles.status}>
            <div className={styles.greenDot}></div>
            Successful
          </td>
          <td>131634495747</td>
          <td>₹10,125.00</td>
          <td>₹1,125.00</td>
          <td>₹9,312</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
