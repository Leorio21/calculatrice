import { ComponentPropsWithoutRef } from "react";
import styles from "./Key.module.css";
import classNames from "classnames/bind";

type KeyProps = {
  type: string;
} & ComponentPropsWithoutRef<"div">;

const cx = classNames.bind(styles);

function Key({
  type,
  children,
  ...props
}: KeyProps) {
  return (
    <div
      {...props}
      className={cx({
        container: true,
        standardKey: type === "standardKey",
        deleteResetKey: type === "deleteResetKey",
        resultKey: type === "resultKey"
      })}
    >
      {children}
    </div>
  );
}

export default Key;
