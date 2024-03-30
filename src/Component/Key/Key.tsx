import { ComponentPropsWithoutRef } from "react";
import styles from "./Key.module.css";
import classNames from "classnames/bind";

type KeyProps = {
  standardKey?: boolean;
  deleteResetKey?: boolean;
  resultKey?: boolean;
} & ComponentPropsWithoutRef<"div">;

const cx = classNames.bind(styles);

function Key({
  standardKey = false,
  deleteResetKey = false,
  resultKey = false,
  children,
  ...props
}: KeyProps) {
  return (
    <div
      {...props}
      className={cx({
        container: true,
        standardKey: standardKey,
        deleteResetKey: deleteResetKey,
        resultKey: resultKey
      })}
    >
      {children}
    </div>
  );
}

export default Key;
