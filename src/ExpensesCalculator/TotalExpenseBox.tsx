import "./ExpensesCalculator.scss";

import { BsHouseFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { FaDog } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { BiMoney } from "react-icons/bi";

import classnames from "classnames";

export const TotalExpenseBox = ({
  result,
}: {
  result: {
    totalFood: number | undefined;
    totalHouse: number | undefined;
    totalCar: number | undefined;
    totalAnimals: number | undefined;
    totalOther: number | undefined;
  };
}) => {
  const getTotalCosts = () => {
    const {
      totalFood = 0,
      totalAnimals = 0,
      totalCar = 0,
      totalHouse = 0,
      totalOther = 0,
    } = result;
    return totalFood + totalAnimals + totalCar + totalHouse + totalOther;
  };

  const appendCurrency = (value: number | undefined) => `${value} kr`;

  return (
    <div className="Expenses">
      <div className="Expense">
        <BsHouseFill color="#fff" size={40} />
        <h3>House</h3>
        <p>{appendCurrency(result.totalHouse)}</p>
      </div>
      <div className="Expense">
        <MdFastfood color="#fff" size={40} />
        <h3>Food</h3>
        <p>{appendCurrency(result.totalFood)}</p>
      </div>
      <div className="Expense">
        <AiFillCar color="#fff" size={40} />
        <h3>Car</h3>
        <p>{appendCurrency(result.totalCar)}</p>
      </div>
      <div className="Expense">
        <FaDog color="#fff" size={40} />
        <h3>Animals</h3>
        <p>{appendCurrency(result.totalAnimals)}</p>
      </div>
      <div className="Expense">
        <GiPerspectiveDiceSixFacesRandom color="#fff" size={40} />
        <h3>Other</h3>
        <p>{appendCurrency(result.totalOther)}</p>
      </div>
      <div className="Expense">
        <GiPerspectiveDiceSixFacesRandom color="#fff" size={40} />
        <h3>Other</h3>
        <p>{appendCurrency(result.totalOther)}</p>
      </div>
      <div className={classnames("Expense", "Total")}>
        <BiMoney color="#fff" size={40} />
        <h2>Total</h2>
        <p>{appendCurrency(getTotalCosts())}</p>
      </div>
    </div>
  );
};
