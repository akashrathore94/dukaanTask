import search from "../images/search.svg";
import styles from "./Input.module.css";
import { useState } from "react";

function Input({ type }) {
  const [searchInp, setSearchInp] = useState("");

  return (
    <div className={`${styles.inpDiv} ${styles[type]}`}>
      <img src={search} alt="search-icon" style={{ marginRight: "10px" }} />
      <input
        value={searchInp}
        onChange={(e) => setSearchInp(e.target.value)}
        placeholder={
          type === "sec"
            ? "Search transaction ID"
            : "Search features, tutorials, etc."
        }
        className={`${styles[type]}`}
      />
    </div>
  );
}

export default Input;
