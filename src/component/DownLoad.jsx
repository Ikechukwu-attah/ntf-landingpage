import React from "react";
import assets from "../assets";
import styles from "../styles/Global";

const DownLoad = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Download the source code on Github
          </p>
        </div>
        <button className={`${styles.btnPrimary}`}>Source Code</button>
        <div className={`${styles.flexCenter}`}>
          <img
            src={assets.scene}
            alt="Download_code"
            className={`${styles.fullImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default DownLoad;
