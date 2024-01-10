import ActionButton from "./ActionButton";
import Input from "./Input";
import Table from "./Table";
import styles from "./TableCont.module.css";

import sort from "../images/Sort.svg";
import download from "../images/download.svg";

function TableCont() {
  return (
    <div className={styles.tableCont}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
        className={styles.tableRow}
      >
        <Input type="sec" />
        <div className="buttonsDiv">
          <ActionButton>
            Sort
            <img src={sort} alt="sort-icon" />
          </ActionButton>
          <ActionButton type="justImg">
            <img src={download} alt="download-icon" />
          </ActionButton>
        </div>
      </div>
      <Table />
    </div>
  );
}

export default TableCont;
