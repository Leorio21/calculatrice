import { OperationStatusValue, OperatorValue } from "../../Types/Types";
import classNames from "classnames";
import styles from './screen.module.css';

type ScreenProps = {
  operationStatus: OperationStatusValue;
  currentNumber: string;
  total: string;
  operator: OperatorValue;
}

function Screen({ operationStatus, currentNumber, total, operator }: ScreenProps) {
  return (
    <section className={classNames(styles.screen)}>
      {(operationStatus === "ERROR" || operationStatus === "SOLVE") && total}
      {operationStatus === "PENDING" &&
        `${total} ${operator} ${currentNumber}`}
    </section>
  )
}

export default Screen