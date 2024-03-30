import { useRef, useState } from "react";
import Key from "./Component/Key/Key";
import classNames from "classnames";
import styles from "./App.module.css";

type OperatorValue = "+" | "-" | "*" | "/" | "";

type OperationStatusValue = "PENDING" | "SOLVE" | "ERROR";

function App() {
  const themesValue = ["dark", "light", "purple"];
  const [themeSelected, setThemeSelected] = useState(0);
  const themeRef = useRef<HTMLDivElement>(null);

  const [total, setTotal] = useState<string>("");
  const [operationStatus, setOperationStatus] =
    useState<OperationStatusValue>("PENDING");
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [operator, setOperator] = useState<OperatorValue>("");

  const operation = {
    "+": function (total: number, currentNumber: number) {
      return (total + currentNumber).toString();
    },
    "-": function (total: number, currentNumber: number) {
      return (total - currentNumber).toString();
    },
    "*": function (total: number, currentNumber: number) {
      return (total * currentNumber).toString();
    },
    "/": function (total: number, currentNumber: number) {
      if (currentNumber === 0) {
        setOperationStatus("ERROR");
        return "Error: division par 0";
      }
      return (total / currentNumber).toString();
    },
  };

  const onSolveHandler = () => {
    if (operator !== "") {
      setTotal((current) => operation[operator](+current, +currentNumber));
      setOperationStatus("SOLVE");
      setCurrentNumber("");
    }
  };

  const onDeleteHandler = () => {
    if (currentNumber.length > 0) {
      setCurrentNumber((current) => current.slice(0, -1));
    }
  }

  const onResetHandler = () => {
    setTotal("");
    setCurrentNumber("0");
    setOperator("");
    setOperationStatus("PENDING");
  };

  const onChangeOperatorHandler = (newOperatorValue: OperatorValue) => {
    if (operator === "") {
      setTotal(currentNumber);
    } else if (operationStatus === "PENDING") {
      setTotal((current) => operation[operator](+current, +currentNumber));
    } else if (operationStatus === "SOLVE") {
      setOperationStatus("PENDING");
    }

    setCurrentNumber("");
    setOperator(newOperatorValue);
  };

  const onAddNewDigitHandler = (digitToAdd: string) => {
    if (operationStatus === "SOLVE" || operationStatus === "ERROR") {
      setOperationStatus("PENDING");
      setTotal("");
      setOperator("");
    }
    setCurrentNumber((current) =>
      current === "0" ? digitToAdd : current + digitToAdd
    );
  };

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
    <>
      <section className={styles.header}>
        <p>Calc</p>
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
      </section>
      <section className={classNames(styles.screen)}>
        {(operationStatus === "ERROR" || operationStatus === "SOLVE") && total}
        {operationStatus === "PENDING" &&
          `${total} ${operator} ${currentNumber}`}
      </section>
      <section className={classNames(styles.keyPad)}>
        <Key
          style={{ gridArea: "seven" }}
          onClick={() => onAddNewDigitHandler("7")}
          standardKey
        >
          7
        </Key>
        <Key
          style={{ gridArea: "eight" }}
          onClick={() => onAddNewDigitHandler("8")}
          standardKey
        >
          8
        </Key>
        <Key
          style={{ gridArea: "nine" }}
          onClick={() => onAddNewDigitHandler("9")}
          standardKey
        >
          9
        </Key>
        <Key
          style={{ gridArea: "delete" }}
          onClick={() => onDeleteHandler()}
          deleteResetKey
        >
          DEL
        </Key>
        <Key
          style={{ gridArea: "four" }}
          onClick={() => onAddNewDigitHandler("4")}
          standardKey
        >
          4
        </Key>
        <Key
          style={{ gridArea: "five" }}
          onClick={() => onAddNewDigitHandler("5")}
          standardKey
        >
          5
        </Key>
        <Key
          style={{ gridArea: "six" }}
          onClick={() => onAddNewDigitHandler("6")}
          standardKey
        >
          6
        </Key>
        <Key
          style={{ gridArea: "addition" }}
          onClick={() => onChangeOperatorHandler("+")}
          standardKey
        >
          +
        </Key>
        <Key
          style={{ gridArea: "one" }}
          onClick={() => onAddNewDigitHandler("1")}
          standardKey
        >
          1
        </Key>
        <Key
          style={{ gridArea: "two" }}
          onClick={() => onAddNewDigitHandler("2")}
          standardKey
        >
          2
        </Key>
        <Key
          style={{ gridArea: "three" }}
          onClick={() => onAddNewDigitHandler("3")}
          standardKey
        >
          3
        </Key>
        <Key
          style={{ gridArea: "soustraction" }}
          onClick={() => onChangeOperatorHandler("-")}
          standardKey
        >
          -
        </Key>
        <Key
          style={{ gridArea: "point" }}
          onClick={() => onAddNewDigitHandler(".")}
          standardKey
        >
          .
        </Key>
        <Key
          style={{ gridArea: "zero" }}
          onClick={() => onAddNewDigitHandler("0")}
          standardKey
        >
          0
        </Key>
        <Key
          style={{ gridArea: "division" }}
          onClick={() => onChangeOperatorHandler("/")}
          standardKey
        >
          /
        </Key>
        <Key
          style={{ gridArea: "multiplication" }}
          onClick={() => onChangeOperatorHandler("*")}
          standardKey
        >
          *
        </Key>
        <Key
          style={{ gridArea: "reset" }}
          onClick={() => onResetHandler()}
          deleteResetKey
        >
          RESET
        </Key>
        <Key
          style={{ gridArea: "result" }}
          onClick={() => onSolveHandler()}
          resultKey
        >
          =
        </Key>
      </section>
    </>
  );
}

export default App;
