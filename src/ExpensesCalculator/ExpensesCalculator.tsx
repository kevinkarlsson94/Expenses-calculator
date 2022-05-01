import { useState, useRef, useCallback, useEffect } from "react";
import { ExpensesRow } from "./ExpensesRow";
import { TotalExpenseBox } from "./TotalExpenseBox";
import "./ExpensesCalculator.scss";

interface IRowData {
  category: string;
  price: number;
}

export const ExpensesCalculator = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const emptyField = { category: "food", price: 0 };

  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
  const [rows, setRows] = useState<IRowData[]>([emptyField]);
  const [renderResult, setRenderResult] = useState<boolean>(false);
  const [result, setResult] = useState<{
    totalFood: number;
    totalHouse: number;
    totalCar: number;
    totalAnimals: number;
    totalOther: number;
  }>({
    totalFood: 0,
    totalHouse: 0,
    totalCar: 0,
    totalAnimals: 0,
    totalOther: 0,
  });

  const handleUpdate =
    ({
      index,
      isNumber,
      removeItem,
    }: {
      index: number;
      isNumber?: boolean;
      removeItem?: boolean;
    }) =>
    (event: React.ChangeEvent<any>) => {
      if (removeItem && rows.length > 1) {
        const newRows = [...rows.slice(0, index), ...rows.slice(index + 1)];
        return setRows(newRows);
      }
      const newData: any[] = [...rows];
      newData[index][event.target.name] = isNumber
        ? +event.target.value
        : event.target.value;
      setRows(newData);
    };

  const addRow = () => {
    setRows([...rows, ...[emptyField]]);
  };

  const getTotalByCategory = (category: string) => {
    const values = rows
      .map((item) => (item.category === category ? item : null))
      .filter(Boolean);
    return values?.reduce((prev, next) => prev + next!.price, 0);
  };

  const scrollToResult = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  };

  const calculateTotalCosts = () => {
    setRenderResult(false);
    scrollToResult();
    setResult({
      totalFood: getTotalByCategory("food"),
      totalHouse: getTotalByCategory("house"),
      totalCar: getTotalByCategory("car"),
      totalAnimals: getTotalByCategory("animals"),
      totalOther: getTotalByCategory("other"),
    });
    setShouldUpdate(true);
  };

  useEffect(() => {
    if (shouldUpdate === true) {
      setRenderResult(true);
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  return (
    <>
      <div className="Inputs">
        <ul>
          {rows.map((_, index: number) => (
            <ExpensesRow index={index} handleUpdate={handleUpdate} />
          ))}
        </ul>
        <div className="Buttons">
          <button type="button" onClick={addRow} className="Add">
            Add expense
          </button>
          <button type="button" className="Send" onClick={calculateTotalCosts}>
            Calculate
          </button>
        </div>
      </div>

      {renderResult ? <TotalExpenseBox result={result} /> : null}
    </>
  );
};

export default ExpensesCalculator;
