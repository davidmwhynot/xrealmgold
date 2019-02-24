import { h, Component } from "preact";

class RealmInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, value, handleChange, onClick } = this.props;
    return (
      <div className="request-row">
        <label htmlFor={name}>Realm:</label>
        <input
          className="text-input"
          type="text"
          autocomplete="off"
          placeholder="Sargeras"
          name={name}
          value={value}
          onChange={handleChange}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default RealmInput;
