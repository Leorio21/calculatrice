import { useState } from "react";
import { OperationStatusValue, OperatorValue } from "../Types/Types";

function useOperation() {
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
	};

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

	return {
		total,
		operationStatus,
		currentNumber,
		operator,
		onSolveHandler,
		onDeleteHandler,
		onResetHandler,
		onChangeOperatorHandler,
		onAddNewDigitHandler,
	};
}

export default useOperation;

