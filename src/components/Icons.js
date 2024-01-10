import styles from "./Icons.module.css";
import menu from "../images/Menu.svg";
import menu1 from "../images/Menu1.svg";

function Icons() {
  return (
    <div className={styles.menuCnt}>
      <img src={menu} alt="menu-icon" style={{ marginRight: "10px" }} />
      <img src={menu1} alt="menu-icon" />
    </div>
  );
}

export default Icons;
