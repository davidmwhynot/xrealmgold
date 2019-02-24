import { h, Component } from "preact";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  makeRequest = () => {};

  render() {
    const {
      step,
      updateStep,
      formFields,
      change,
      click,
      resetFields
    } = this.props;
    const { need, needRealm, have, haveRealm, btag, discord } = formFields;

    switch (step) {
      case 0:
        return (
          <StepOne
            need={need}
            needRealm={needRealm}
            have={have}
            haveRealm={haveRealm}
            change={change}
            click={click}
            handleSubmit={e => {
              e.preventDefault();
              updateStep(1);
            }}
          />
        );
        break;
      case 1:
        return (
          <StepTwo
            btag={btag}
            discord={discord}
            change={change}
            click={click}
            handleSubmit={e => {
              e.preventDefault();
              this.makeRequest();
              updateStep(2);
            }}
            cancelRequest={e => {
              e.preventDefault();
              updateStep(0);
            }}
          />
        );
        break;
      case 2:
        return (
          <div>
            <h3>Success</h3>
            <button
              className="btn btn-primary btn-lg btn-block mt-xl-3"
              onClick={() => {
                console.log("TODO");
              }}
            >
              View Request
            </button>
            <button
              className="btn btn-success btn-lg btn-block mt-xl-3"
              onClick={() => {
                resetFields();
                updateStep(0);
              }}
            >
              New Request
            </button>
          </div>
        );
        break;
      case "ANIMATE":
        return null;
      case "ERROR":
        return (
          <div>
            <h3 className="text-danger">Error</h3>
            <button
              className="btn btn-primary btn-lg btn-block mt-xl-3"
              onClick={() => {
                updateStep(0);
              }}
            >
              Retry Request
            </button>
          </div>
        );
        break;
      default:
        return <h3>Default</h3>;
    }
  }
}

export default Form;
