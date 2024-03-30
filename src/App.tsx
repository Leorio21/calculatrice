import classNames from "classnames";
import styles from "./App.module.css";
import Screen from "./Component/Screen/Screen";
import KeyPad from "./Component/KeyPad/KeyPad";
import ThemeSelector from "./Component/ThemeSelector/ThemeSelector";
import useOperation from "./Hooks/useOperation";

function App() {

  const {
    total,
    operationStatus,
    currentNumber,
    operator,
    onSolveHandler,
    onDeleteHandler,
    onResetHandler,
    onChangeOperatorHandler,
    onAddNewDigitHandler
  } = useOperation();

  return (
    <>
      <section className={classNames(styles.header)}>
        <p>Calc</p>
        <ThemeSelector />
      </section>
      <Screen
        operationStatus={operationStatus}
        currentNumber={currentNumber}
        total={total}
        operator={operator}
      />
      <KeyPad
        onAddNewDigitHandler={onAddNewDigitHandler}
        onChangeOperatorHandler={onChangeOperatorHandler}
        onSolveHandler={onSolveHandler}
        onResetHandler={onResetHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </>
  );
}

export default App;
