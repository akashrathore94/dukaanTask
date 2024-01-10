import helpIcon from "../images/Help.svg";
import styles from "./Header.module.css";
import Icons from "./Icons";
import Input from "./Input";

function Header() {
  return (
    <header>
      <div className={styles.how}>
        <h1 className={styles.head}>Payouts</h1>
        <img src={helpIcon} alt="help-icon" style={{ marginRight: "5px" }} />
        <p>How it works</p>
      </div>

      <Input />

      <Icons />
    </header>
  );
}

export default Header;
