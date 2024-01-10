import ActionButton from "./ActionButton";
import styles from "./Overview.module.css";
import arrow from "../images/arrow.svg";

function Overview() {
  return (
    <div className={styles.overview}>
      <p>Overview</p>

      <ActionButton>
        This Month <img src={arrow} alt="arrow-icon" />
      </ActionButton>
    </div>
  );
}

export default Overview;
