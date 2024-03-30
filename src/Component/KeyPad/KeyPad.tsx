import styles from "./KeyPad.module.css";
import classNames from "classnames";
import Key from "../Key/Key"
import { OperatorValue } from "../../Types/Types";

type KeyPadProps = {
  onAddNewDigitHandler: (digitToAdd: string) => void;
  onChangeOperatorHandler: (newOperatorValue: OperatorValue) => void;
  onSolveHandler: () => void;
  onResetHandler: () => void;
  onDeleteHandler: () => void;

}

function KeyPad({
  onAddNewDigitHandler,
  onChangeOperatorHandler,
  onSolveHandler,
  onResetHandler,
  onDeleteHandler
}: KeyPadProps) {

  const keys = [
    {
      value: "0",
      position: "zero",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("0")
    },
    {
      value: "1",
      position: "one",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("1")
    },
    {
      value: "2",
      position: "two",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("2")
    },
    {
      value: "3",
      position: "three",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("3")
    },
    {
      value: "4",
      position: "four",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("4")
    },
    {
      value: "5",
      position: "five",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("5")
    },
    {
      value: "6",
      position: "six",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("6")
    },
    {
      value: "7",
      position: "seven",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("7")
    },
    {
      value: "8",
      position: "eight",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("8")
    },
    {
      value: "9",
      position: "nine",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler("9")
    },
    {
      value: ".",
      position: "point",
      type: "standardKey",
      onClick: () => onAddNewDigitHandler(".")
    },
    {
      value: "+",
      position: "addition",
      type: "standardKey",
      onClick: () => onChangeOperatorHandler("+")
    },
    {
      value: "-",
      position: "soustraction",
      type: "standardKey",
      onClick: () => onChangeOperatorHandler("-")
    },
    {
      value: "*",
      position: "multiplication",
      type: "standardKey",
      onClick: () => onChangeOperatorHandler("*")
    },
    {
      value: "/",
      position: "division",
      type: "standardKey",
      onClick: () => onChangeOperatorHandler("/")
    },
    {
      value: "=",
      position: "result",
      type: "resultKey",
      onClick: () => onSolveHandler()
    },
    {
      value: "DEL",
      position: "delete",
      type: "deleteResetKey",
      onClick: () => onDeleteHandler()
    },
    {
      value: "RESET",
      position: "reset",
      type: "deleteResetKey",
      onClick: () => onResetHandler()
    },
  ]

  return (
    <section className={classNames(styles.keyPad)}>
      {keys.map((key) =>
        <Key
          key={key.value}
          style={{ gridArea: key.position }}
          onClick={key.onClick}
          type={key.type}
        >
          {key.value}
        </Key>
      )}
    </section>
  )
}

export default KeyPad