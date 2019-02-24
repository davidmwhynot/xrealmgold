import { h, Component } from "preact";

class StepTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      btag,
      discord,
      handleSubmit,
      cancelRequest,
      change,
      click
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="request-form">
        <div className="request-group">
          <h3 className="request-title">Contact Info</h3>
          <div className="request-row">
            <label htmlFor={"discord"}>Discord:</label>
            <input
              className="text-input"
              type="text"
              autocomplete="off"
              placeholder="discord#1234"
              name={"discord"}
              value={discord}
              onChange={change}
              onClick={click}
            />
          </div>
          <div className="request-row">
            <label htmlFor={"btag"}>Btag:</label>
            <input
              className="text-input"
              type="text"
              autocomplete="off"
              placeholder="btag#1234"
              name={"btag"}
              value={btag}
              onChange={change}
              onClick={click}
            />
          </div>
        </div>
        <div className="submit-row">
          <button className="btn btn-warning mt-xl-3" onClick={cancelRequest}>
            Go&nbsp;Back
          </button>
          <input
            className="btn btn-primary mt-xl-3"
            type="submit"
            value="Submit Request"
          />
        </div>
      </form>
    );
  }
}

export default StepTwo;
