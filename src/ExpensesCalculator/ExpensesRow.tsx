export const ExpensesRow = ({
  index,
  handleUpdate,
}: {
  index: number;
  handleUpdate: ({
    index,
    isNumber,
    removeItem,
  }: {
    index: number;
    isNumber?: boolean;
    removeItem?: boolean;
  }) => (event: React.ChangeEvent<any>) => void;
}): JSX.Element => (
  <li key={index}>
    <div className="Row">
      <select
        name="category"
        onChange={handleUpdate({ index })}
        placeholder="Category"
      >
        <option value="food">Food</option>
        <option value="car">Car</option>
        <option value="house">House</option>
        <option value="animals">Animals</option>
        <option value="other">Other</option>
      </select>
      <input
        type="text"
        placeholder="Item"
        name="item"
        onChange={handleUpdate({ index, isNumber: true })}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleUpdate({ index, isNumber: true })}
      />
      <button
        className="RemoveButton"
        onClick={handleUpdate({ index, removeItem: true })}
      >
        X
      </button>
    </div>
  </li>
);
