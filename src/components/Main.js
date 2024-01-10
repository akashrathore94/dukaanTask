import styles from "./Main.module.css";
import arrowLeft from "../images/arrow-left.svg";
import helpIcon from "../images/Help.svg";
import helpIconWhite from "../images/HelpWhite.svg";
import Button from "./Button";
import Overview from "./Overview";
import TableCont from "./TableCont";

function Main() {
  return (
    <section className={styles.container}>
      <Overview />
      <div className={styles.payouts}>
        <div className={`${styles.payout} ${styles.active}`}>
          <div className={styles.payoutHead}>
            <p>Next Payout</p>
            <img
              src={helpIconWhite}
              alt="helpIcon"
              style={{ marginLeft: "10px", width: "16px" }}
            />
          </div>
          <div className={styles.payoutDet}>
            <p>₹92,312.20</p>
            <span>
              13 orders
              <img
                src={arrowLeft}
                alt="arrowleft"
                style={{ marginLeft: "5px" }}
              />
            </span>
          </div>
          <div className={styles.due}>
            <p>Next payout date:</p>
            <p>Today, 04:00PM</p>
          </div>
        </div>

        <div className={styles.payout}>
          <div className={styles.payoutHead}>
            <p>Amount Pending</p>
            <img
              src={helpIcon}
              alt="helpIcon"
              style={{ marginLeft: "10px", width: "16px" }}
            />
          </div>
          <div className={styles.payoutDet}>
            <p>₹92,312.20</p>
            <span>
              13 orders
              <img
                src={arrowLeft}
                alt="arrowleft"
                style={{ marginLeft: "5px" }}
              />
            </span>
          </div>
        </div>

        <div className={styles.payout}>
          <div className={styles.payoutHead}>
            <p>Amount Pending</p>
            <img
              src={helpIcon}
              alt="helpIcon"
              style={{ marginLeft: "10px", width: "16px" }}
            />
          </div>
          <div className={styles.payoutDet}>
            <p>₹23,92,312.19</p>
          </div>
        </div>
      </div>

      <p className={styles.transac}>Transactions | This Month</p>

      <div className="buttonsDiv mb-20">
        <Button type="primary">Payouts (22)</Button>
        <Button type="disable">Refund (2) </Button>
      </div>

      <TableCont />
    </section>
  );
}

export default Main;
