import { h, Component } from "preact";

class AmountInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, value, handleChange, onClick } = this.props;
    return (
      <div className="amount-row">
        <label htmlFor={name}>Amount:</label>
        <span>
          <input
            className="amount-input"
            type="text"
            pattern="\d*"
            autocomplete="off"
            placeholder="0"
            name={name}
            value={value}
            onChange={handleChange}
            onClick={onClick}
          />
          k
        </span>
      </div>
    );
  }
}

export default AmountInput;
