import { h, Component } from "preact";

import AmountInput from "./AmountInput";
import RealmInput from "./RealmInput";

class StepOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      need,
      needRealm,
      have,
      haveRealm,
      handleSubmit,
      change,
      click
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="request-form">
        <div className="request-group">
          <h3 className="request-title">I need...</h3>
          <AmountInput
            name="need"
            value={need}
            handleChange={change}
            onClick={click}
          />
          <RealmInput
            name="needRealm"
            value={needRealm}
            handleChange={change}
            onClick={click}
          />
        </div>

        <div className="request-group mt-2">
          <h3 className="request-title">I have...</h3>
          <AmountInput
            name="have"
            value={have}
            handleChange={change}
            onClick={click}
          />
          <RealmInput
            name="haveRealm"
            value={haveRealm}
            handleChange={change}
            onClick={click}
          />
        </div>
        <input
          className="btn btn-primary btn-block btn-lg mt-xl-3"
          type="submit"
          value="Next"
        />
      </form>
    );
  }
}

export default StepOne;
