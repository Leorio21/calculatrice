import { useRef, useState } from "react";
import styles from "./ThemeSelector.module.css";
import classNames from "classnames";

function ThemeSelector() {

  const themesValue = ["dark", "light", "purple"];
  const [themeSelected, setThemeSelected] = useState(0);
  const themeRef = useRef<HTMLDivElement>(null);

  const onChangeThemeHandler = () => {
    const body = document.querySelector("body");
    if (themeRef.current !== null && body !== null) {
      const newThemeNumber = (themeSelected + 1) % 3;
      themeRef.current.classList.remove(
        styles[`select${themesValue[themeSelected]}`]
      );
      body.classList.remove(themesValue[themeSelected]);
      themeRef.current.classList.add(
        styles[`select${themesValue[newThemeNumber]}`]
      );
      body.classList.add(themesValue[newThemeNumber]);
      setThemeSelected(newThemeNumber);
    } else {
      alert("Une erreur est survenue lors du changement de thème");
    }
  };

  return (
    <div className={styles.themes}>
      <div className={styles.themeDivTitle}>Thèmes</div>
      <div className={styles.themeDivSelector}>
        <div className={classNames(styles.themesNumbers)}>
          <span className={classNames(styles.themesNumber)}>1</span>
          <span className={classNames(styles.themesNumber)}>2</span>
          <span className={classNames(styles.themesNumber)}>3</span>
        </div>
        <div
          ref={themeRef}
          onClick={onChangeThemeHandler}
          className={classNames(styles.themesSelector)}
        >
          <div className={classNames(styles.themeButton)}></div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSelector