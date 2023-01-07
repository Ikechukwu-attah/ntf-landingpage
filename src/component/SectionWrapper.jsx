import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "../component/Button";
const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center w-11/12 sm:w-full minmd:w-3/4 ${
          reverse ? styles.boxReverseClass : styles.boxClass
        }`}
      >
        <div className={`${styles.descDiv}`}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
          <p className={`${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="deployed to nft market place"
            />
          )}
        </div>
        <div className={`flex-1 p-8 sm:px-0 ${styles.flexCenter}`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
